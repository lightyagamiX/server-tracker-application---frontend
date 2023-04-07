import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostformService {

  constructor(private http:HttpClient) { }
  login(params:JSON) {
    return this.http.post(env.apiHost.concat('/login_page'),params)
  }
  
  

  postorg(params:JSON): Observable<any> {

    return this.http.post<any>(env.apiHost.concat('/dep/'),params);
  }

  postthird(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/thirdparty/'),params);
  }

  postrole(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/roles/'),params);
  }

  postusers(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/users/'),params);
  }
  
  postapp(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/app/'),params);
  }

  posttraining(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/training/'),params);
  }
  

  postreporttype(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/reporttype/'),params);
  }

  postletter(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/letter/'),params);
  }

  postreport(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/report/'),params);
  }

  postuserrole(params:JSON){
    
    return this.http.post<any>(env.apiHost.concat('/userrole/'),params);
  }

 
}
