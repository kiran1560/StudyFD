import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import { CourseService } from 'src/app/shared/course/course.service';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';

@Component({
  selector: 'app-addbatches',
  templateUrl: './addbatches.component.html',
  styleUrls: ['./addbatches.component.css']
})
export class AddbatchesComponent implements OnInit {

  addbatches = new FormGroup({
    course_id: new FormControl(''),
    teacher_id: new FormControl(''),
    time: new FormControl(''),
    starting_date: new FormControl('')
  })

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private route: Router, private batchesservice: BatchesService, private course: CourseService, private teacherservice: TeacherService) { }

  ngOnInit(): void {
    this.getcourse()
    this.getteacher()
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
  teachers = []
  public getteacher() {
    this.spinner.show()
    this.teacherservice.getteacher().subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Teacher)
        this.teachers = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )

  }


  submit() {
    this.spinner.show()
    this.batchesservice.addbatches(this.addbatches.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        if (res.Success) {
          this.toastr.success('success', res.message)
          this.route.navigateByUrl('/layout/listbatches')
        }
      },
      err => {
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error", err)
        this.route.navigateByUrl('/layout/listbatches')
      }
    )
  }

}
