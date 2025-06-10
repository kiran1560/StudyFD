import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentbatchesService {

  baseurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.baseurl = _baseurl
  }

  studentassignedbatches(form: any) {
    // console.log("service forrm",form)
    return this.http.post(this.baseurl + "/admin/assignedBatch/all", form);
  }

  studentbatchmaterial(form:any)
  {
    return this.http.post(this.baseurl+"/admin/showmaterial",form)
  }

  studentbatchassignment(form:any)
  {
    return this.http.post(this.baseurl+"/admin/studentAssignment/all",form)
  }

  attemptassignment(form:any)
  {
    return this.http.post(this.baseurl+"/admin/studentAssignment/addAnswer",form)
  }

}
