import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';
import { AuthService } from '../services/auth.service';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';


const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private tokenService: TokenStorageService, private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let authReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }

    return next.handle(authReq).pipe(catchError(error => {

      if ((error instanceof HttpErrorResponse && error.status === 500) || error.status === 0) {


        alert('Server Error');

        // this.router.navigate(['/'])
      }
      if (error instanceof HttpErrorResponse && !authReq.url.includes('/exammgt/db_auth') && error.status === 401) {

        if (authReq.url.includes('/exammgt/token/refresh')) {

          // console.log('Expired Refresh Token')

          

          this.router.navigate(['/'])

        } else {

          return this.handle401Error(authReq, next);

        }
      }

      return throwError(error);
    }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const token = this.tokenService.getRefreshToken();

      if (token)
        return this.authService.refreshToken(token).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;

            if (token.access != undefined) {

              this.tokenService.saveToken(token.access);
              this.tokenService.saveRefreshToken(token.refresh);
              this.refreshTokenSubject.next(token.refresh);

              return next.handle(this.addTokenHeader(request, token.access));
            }
            else {
              this.tokenService.signOut();
              return next.handle(request);
            }
          }),
          catchError((err) => {
            this.isRefreshing = false;

            this.tokenService.signOut();
            return throwError(err);
          })
        );
    }

    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
    );
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {

    return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];