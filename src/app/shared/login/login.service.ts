import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl=''
  token
  //userType


  constructor(private http:HttpClient,@Inject('baseurl')_baseurl:any, private auth:AuthService) {
    this.baseurl=_baseurl
    this.token=this.auth.getToken()
    //this.userType=this.auth.getuserType()
    
   }

   login(form:any){
     return this.http.post(this.baseurl+"/admin/login",form)
   }

   dashboard(form:any){
     return this.http.post(this.baseurl+"/admin/dashboard",form)
   }

}
