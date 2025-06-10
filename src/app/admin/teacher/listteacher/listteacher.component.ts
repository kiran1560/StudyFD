import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listteacher',
  templateUrl: './listteacher.component.html',
  styleUrls: ['./listteacher.component.css']
})
export class ListteacherComponent implements OnInit {
  teachers:any=[]

  constructor(private teacherservice:TeacherService, private spinner:NgxSpinnerService,private route:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getteacher()
  }
  
  public getteacher(){
    this.spinner.show()
    this.teacherservice.getteacher().subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Teacher)
          this.teachers= res.Teacher
      },
      err=>{
        this.spinner.hide()
        // console.log(err)
      }
    )
  
  }

 

delete(id:any) {
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
      this.teacherservice.deleteedit({"_id":id}).subscribe(
        (res:any)=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getteacher()
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