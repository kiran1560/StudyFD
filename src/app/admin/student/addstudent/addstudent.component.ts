import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import { CourseService } from 'src/app/shared/course/course.service';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

    addstudent=new FormGroup({
      student_name:new FormControl(''),
      batch_id:new FormControl(''),
      course_name: new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      phone_no:new FormControl(''),
      roll_no:new FormControl(''),
      qualification:new FormControl(''),
      city:new FormControl(''),
      gender:new FormControl(''),
           
    })

  constructor(private studentservice:StudentService, private spinner:NgxSpinnerService, private toastr:ToastrService, private route:Router, private course:CourseService, private batch:BatchesService) { }

  ngOnInit(): void {
    this.getcourse()
    this.getbatches()
  }

  courses = []
  public getcourse() {
    this.spinner.show()
    this.course.getcourse().subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Teacher)
        this.courses = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }


  batches = []
  public getbatches() {
    this.spinner.show()
    this.batch.getbatches({}).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        this.batches = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

  getdate(d:any){
    var dd = d.split('T');
    return dd[0]
  }

  submit() {
    // console.log(this.addstudent.value)
    this.spinner.show()
    this.studentservice.addstudent(this.addstudent.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        // return
        if (res.Success) {
          this.toastr.success('success', res.Message)
          this.route.navigateByUrl('/layout/liststudent')
        }
      },
      err=>{
        this.spinner.hide()
        console.log(err)
      }
    )
  }

}
