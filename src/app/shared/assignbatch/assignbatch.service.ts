import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignbatchService {

  
  baseurl: any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl: any)
  {
    this.baseurl = _baseurl
  }

  add(form: any) {
    return this.http.post(this.baseurl + "/admin/assignedBatch/add", form);
  }

  get(form:any){
    return this.http.post(this.baseurl+"/admin/assignedBatch/all",form);
  }

  edit(form:any){
    return this.http.post(this.baseurl+"/admin/assignedBatch/update",form)
  }

  fetchbyid(form:any){
    return this.http.post(this.baseurl+"/admin/assignedBatch/single",form)
  }

  delete(form:any){
    return this.http.post(this.baseurl+"/admin/assignedBatch/delete",form)
  }

  
}
