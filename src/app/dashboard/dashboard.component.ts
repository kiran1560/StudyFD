import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../shared/auth/auth.service';
import { LoginService } from '../shared/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router,private dashboard : LoginService,private spinner : NgxSpinnerService) { }

  ngOnInit(): void {
    if (this.auth.getToken() == null) {
      this.router.navigateByUrl('/login')
    }
    this.getDashboard()
  }
  
  totalCourses:any
  totalBatches:any
  totalTeachers:any
  totalStudents:any

  getDashboard(){
    this.spinner.show()
    this.dashboard.dashboard({}).subscribe(
      (res:any)=>{
        this.spinner.hide()
        // console.log(res)
        this.totalCourses = res.totalCourses
        this.totalBatches = res.totalBatches
        this.totalTeachers = res.totalTeachers
        this.totalStudents = res.totalStudents        
      },
      err=>{
        this.spinner.hide()
          // console.log(err)
      }
    )
  }


}
