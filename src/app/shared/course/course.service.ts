import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.baseurl = _baseurl
  }

  addcourse(form: any) {
    return this.http.post(this.baseurl + "/admin/addcourse", form);
  }

  getcourse(){
    return this.http.post(this.baseurl+"/admin/showcourse",{});
  }

  editcourse(form:any){
    return this.http.post(this.baseurl+"/admin/updatecourse",form)
  }

  fetchcoursebyid(form:any){
    return this.http.post(this.baseurl+"/admin/showonecourse",form)
  }

  deleteedit(id:any){
    return this.http.post(this.baseurl+"/admin/deletecourse",id)
  }

}
