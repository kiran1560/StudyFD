import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  baseurl: any


  constructor(private http:HttpClient,@Inject('baseurl') _baseurl: any) { 
    this.baseurl=_baseurl
  }

  addteacher(form:any){
    return this.http.post(this.baseurl+"/admin/addteacher",form);
  }

  getteacher(){
    return this.http.post(this.baseurl+"/admin/showteacher",{});
  }
  
  singleteacher(form:any){
    return this.http.post(this.baseurl+"/admin/showsingleteacher",form);
  }

  updateteacher(form:any){
    return this.http.post(this.baseurl+"/admin/updateteacher",form);
  }

  deleteedit(id:any){
    return this.http.post(this.baseurl+"/admin/deleteteacher",id);
  }


}
