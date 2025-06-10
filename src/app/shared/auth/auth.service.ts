import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public setItems(response:any){
    localStorage.setItem('email',response.data.email)
    localStorage.setItem('studentId',response.data.studentId)
    localStorage.setItem('teacherId',response.data.teacherId)
    localStorage.setItem('token',response.token)
  }

  public getEmail(){
    return localStorage.getItem('email')
  }

  public getToken(){
    return localStorage.getItem('token')
  }
  
  public getStudentId(){
    return localStorage.getItem('studentId')
  }
  public getTeacherId(){
    return localStorage.getItem('teacherId')
  }

  public remove(){
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('studentId')
    localStorage.removeItem('teacherId')
  }
  
}
