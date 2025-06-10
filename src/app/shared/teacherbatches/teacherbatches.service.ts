import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherbatchesService {

  baseurl: any
  constructor(private http: HttpClient, @Inject('baseurl') _baseurl: any) {
    this.baseurl = _baseurl
  }

  allbatches(form: any) {
    return this.http.post(this.baseurl + "/admin/showbatches", form);
  }
  
  studentBybatches(form: any) {
    return this.http.post(this.baseurl + "/admin/assignedBatch/all", form);
  }
  
}
