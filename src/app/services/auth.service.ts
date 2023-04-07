import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment as env } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin: boolean = false;

  var1: any = "not changed1"

  var1Subscription: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  login(loginCredentials: any): Observable<any> {

    return this.http.post(env.apiHost.concat('/login_page'), loginCredentials, httpOptions)

  }

  refreshToken(token: string) {

    return this.http.post(env.apiHost.concat('/token/refresh/'), { refresh: token }, httpOptions);

  }

  
}


