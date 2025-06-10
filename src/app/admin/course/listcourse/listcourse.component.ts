import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course/course.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styleUrls: ['./listcourse.component.css']
})
export class ListcourseComponent implements OnInit {
  courses: any = []
  constructor(private spinner: NgxSpinnerService, private route: Router, private toastr: ToastrService, private course: CourseService) { }
  ngOnInit(): void {
    this.getcourse()
  }

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

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.course.deleteedit({"_id":id}).subscribe(
          (res:any)=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getcourse()
          },
          err=>{
            Swal.fire(
              'Error!',
              'Try Again',
              'error'
            )
          })
      }
    })
  }
}
