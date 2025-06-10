import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  baseurl: any
  constructor(private http: HttpClient,@Inject('baseurl') _baseurl: any)
  {
    this.baseurl = _baseurl
  }

  addmaterial(form: any) {
    return this.http.post(this.baseurl + "/admin/addmaterial", form);
  }

  getmaterial(){
    return this.http.post(this.baseurl+"/admin/showmaterial",{});
  }

  editmaterial(form:any){
    return this.http.post(this.baseurl+"/admin/materialupdate",form)
  }

  fetchmaterialbyid(form:any){
    return this.http.post(this.baseurl+"/admin/fetchmaterialbyid",form)
  }

  deleteedit(id:any){
    return this.http.post(this.baseurl+"/admin/deletematerial",id)
  }


}
