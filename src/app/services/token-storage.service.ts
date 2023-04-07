import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { environment as env } from '../../environments/environment'
import { AuthService } from './auth.service';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  signOut(): void {

    localStorage.clear();

    this.auth.isLogin = false;

    this.router.navigate(['/login']);

  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);

    const user = this.getUser();
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveRefreshToken(token: string): void {
    localStorage.removeItem(REFRESHTOKEN_KEY);
    localStorage.setItem(REFRESHTOKEN_KEY, token);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem(REFRESHTOKEN_KEY);
  }

  public saveUser(user: any): void {
    delete user.access;
    delete user.refresh
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }


  getRefreshTokenapi(val:JSON): Observable<any> {

    return this.http.post<any>(env.apiHost.concat('/token/'),val)

  }

  checkRefreshToken(token: any): Observable<any> {

    return this.http.post<any>(env.apiHost.concat('/userview'), { token: token })

  }
}
