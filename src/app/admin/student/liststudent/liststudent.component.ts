import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/shared/student/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
students=[]
_id:any
  constructor(private spinner:NgxSpinnerService, private toastr:ToastrService, private route:Router, private student:StudentService) { }

  ngOnInit(): void {
  this.getstudent()
  }

  public getstudent(){
    this.student.getstudent({}).subscribe(
      (res: any) => {
        this.spinner.hide()
        console.log(res.Data)
          this.students= res.Data
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
      this.student.deleteedit({"_id":id}).subscribe(
        (res:any)=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getstudent()
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