import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentassignmentService {

  baseurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.baseurl = _baseurl
  }

  evaluate(form: any) {
    // console.log("service forrm",form)
    return this.http.post(this.baseurl + "/admin/studentAssignment/evaluate", form);
  }

  getall(form:any){
    return this.http.post(this.baseurl+"/admin/studentAssignment/all",form);
  }

  singleassignment(form:any){
    return this.http.post(this.baseurl+"/admin/studentAssignment/single",form);
  }
  
}
