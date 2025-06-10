import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BatchesService {

  baseurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.baseurl = _baseurl
  }

  addbatches(form: any) {
    console.log("service forrm",form)
    return this.http.post(this.baseurl + "/admin/addbatch", form);
  }

  getbatches(form:any){
    // console.log(this.baseurl+"/admin/showbatches",form)
    return this.http.post(this.baseurl+"/admin/showbatches",form);
  }

  singlebatches(form:any){
    return this.http.post(this.baseurl+"/admin/showonebatch",form);
  }

  updatesbatches(form:any){
    return this.http.post(this.baseurl+"/admin/updatebatch",form);
  }

  deleteedit(id:any){
    return this.http.post(this.baseurl+"/admin/deletebatches",id);
  }


}

