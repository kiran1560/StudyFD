import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignbatchService } from 'src/app/shared/assignbatch/assignbatch.service';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listassignbatch',
  templateUrl: './listassignbatch.component.html',
  styleUrls: ['./listassignbatch.component.css']
})
export class ListassignbatchComponent implements OnInit {

  batch: any = []

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private route: Router, private batches: BatchesService, private assignbatch: AssignbatchService) { }

  ngOnInit(): void {
    this.getbatches()
  }

  public getbatches() {
    this.assignbatch.get({}).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.data)
        this.batch = res.data
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
        this.assignbatch.delete({ "_id": id }).subscribe(
          (res: any) => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getbatches()
          },
          err => {
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
