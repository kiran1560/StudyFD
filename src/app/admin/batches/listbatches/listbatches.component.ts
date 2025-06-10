import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listbatches',
  templateUrl: './listbatches.component.html',
  styleUrls: ['./listbatches.component.css']
})
export class ListbatchesComponent implements OnInit {
  batch:any=[]

  constructor(private spinner:NgxSpinnerService, private toastr:ToastrService, private route:Router, private batches:BatchesService) { }

  ngOnInit(): void {
    this.getbatches()
  }

  public getbatches(){
    this.batches.getbatches({}).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Teacher)
          this.batch= res.Teacher
      },
      err=>{
        this.spinner.hide()
        // console.log(err)
      }
    )
  
  }

  getDate(date:any){
    var new_date =date.split('T')
    return new_date[0];
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
      this.batches.deleteedit({"_id":id}).subscribe(
        (res:any)=>{
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.getbatches()
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