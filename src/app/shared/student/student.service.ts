import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  baseurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.baseurl = _baseurl
  }

  addstudent(form: any) {
    // console.log("service forrm",form)
    return this.http.post(this.baseurl + "/admin/addstudent", form);
  }

  getstudent(form:any){
    return this.http.post(this.baseurl+"/admin/showstudent",form);
  }

  singlestudent(form:any){
    return this.http.post(this.baseurl+"/admin/showonestudent",form);
  }

  updatestudent(form:any){
    return this.http.post(this.baseurl+"/admin/updatestudent",form);
  }

  deleteedit(id:any){
    return this.http.post(this.baseurl+"/admin/deletestudent",id);
  }


}
