import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetformService {

  constructor(private http:HttpClient) { }
  //organisation------------------------------------------------

  getorg(){
    
    return this.http.get(env.apiHost.concat('/dep/'))
  }

  deleteorg(val:any){
    
    return this.http.delete(env.apiHost.concat('/dep/')+val);
  }

  getorgbyId(val:any){
    
    return this.http.get(env.apiHost.concat('/dep/')+val)

  }
  updateorg(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/dep/')+ val,val2);
  }
  
  

  //thirdparty------------------------------------------------
  getthird(){
    
    return this.http.get(env.apiHost.concat('/thirdparty/'))
  }

  deletethird(val:any){
    
    return this.http.delete(env.apiHost.concat('/thirdparty/')+val);
  }

  getthirdbyId(val:any){
    
    return this.http.get(env.apiHost.concat('/thirdparty/')+val)

  }

  updatethird(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/thirdparty/')+ val,val2);
  }



  //roles------------------------------------------------------------------------------
  viewroles(){
    
    return this.http.get(env.apiHost.concat('/roles/'))
  }

  deleteroles(val:any){
    
    return this.http.delete(env.apiHost.concat('/roles/')+val);
  }

  getrolesbyId(val:any){
    
    return this.http.get(env.apiHost.concat('/roles/')+val)

  }

  updatroles(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/roles/')+ val,val2);
  }



  //user------------------------------------------------------------------------------
  getusers(){
    
    return this.http.get(env.apiHost.concat('/users/'))
  }

  deleteusers(val:any){
    
    return this.http.delete(env.apiHost.concat('/users/')+val);
  }

  getusersbyId(val:any){
    
    return this.http.get(env.apiHost.concat('/users/')+val)

  }

  updateusers(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/users/')+ val,val2);
  }



  //application------------------------------------------------------------------------------
  getapp(){
    
    return this.http.get(env.apiHost.concat('/app/'))
  }

  deleteapp(val:any){
    
    return this.http.delete(env.apiHost.concat('/app/')+val);
  }

  getappbyId(val:any){
    
    return this.http.get(env.apiHost.concat('/app/')+val)

  }

  updateapp(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/app/')+ val,val2);
  }



  //training------------------------------------------------------------------------------
  gettraining(){
    
    return this.http.get(env.apiHost.concat('/training/'))
  }

  deletetraining(val:any){
    
    return this.http.delete(env.apiHost.concat('/training/')+val);
  }

  gettrainingbyId(val:any){
    
    return this.http.get(env.apiHost.concat('/training/')+val)

  }

  updatetraining(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/training/')+ val,val2);
  }
  

  //reporttype------------------------------------------------------------------------------
  getreporttype(){
    
    return this.http.get(env.apiHost.concat('/reporttype/'))
  }

  deletereporttype(val:any){
    
    return this.http.delete(env.apiHost.concat('/reporttype/')+val);
  }

  getreporttypebyId(val:any){
    
    return this.http.get(env.apiHost.concat('/reporttype/')+val)

  }

  updatereporttype(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/reporttype/')+ val,val2);
  }


  //letter------------------------------------------------------------------------------
  getletter(){
    
    return this.http.get(env.apiHost.concat('/letter/'))
  }

  deleteletter(val:any){
    
    return this.http.delete(env.apiHost.concat('/letter/')+val);
  }

  getletterbyId(val:any){
    
    return this.http.get(env.apiHost.concat('/letter/')+val)

  }

  updateletter(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/letter/')+ val,val2);
  }

  //report------------------------------------------------------------------------------
  getreport(){
    
    return this.http.get(env.apiHost.concat('/report/'))
  }

  deletereport(val:any){
    
    return this.http.delete(env.apiHost.concat('/report/')+val);
  }

  getreportbyId(val:any){
    
    return this.http.get(env.apiHost.concat('/report/')+val)

  }

  updatereport(val:any,val2:JSON){
    
    return this.http.put(env.apiHost.concat('/report/')+ val,val2);
  }



    //user-role-map------------------------------------------------------------------------------
    getuserrolemap(){
      
      return this.http.get(env.apiHost.concat('/userrole/'))
    }
  
    deleteuserrolemap(val:any){
      
      return this.http.delete(env.apiHost.concat('/userrole/')+val);
    }
  
    getuserrolemapbyId(val:any){
      
      return this.http.get(env.apiHost.concat('/userrole/')+val)
  
    }
  
    updateuserrolemap(val:any,val2:JSON){
      
      return this.http.put(env.apiHost.concat('/userrole/')+ val,val2);
    }

}
