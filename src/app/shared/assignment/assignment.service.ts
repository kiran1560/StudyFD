import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  baseurl: any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl: any)
  {
    this.baseurl = _baseurl
  }

  addassignment(form: any) {
    return this.http.post(this.baseurl + "/admin/addassignment", form);
  }

  getassignment(){
    return this.http.post(this.baseurl+"/admin/showassignment",{});
  }

  editassignment(form:any){
    return this.http.post(this.baseurl+"/admin/assignmentupdate",form)
  }

  fetchassignmentbyid(form:any){
    return this.http.post(this.baseurl+"/admin/fetchassignmentbyid",form)
  }

  deleteedit(id:any){
    return this.http.post(this.baseurl+"/admin/deleteassignment",id)
  }

  }
