import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listassignment',
  templateUrl: './listassignment.component.html',
  styleUrls: ['./listassignment.component.css']
})
export class ListassignmentComponent implements OnInit {

  _imageurl: any
  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private assignment: AssignmentService, private route: Router, private trusturl: DomSanitizer, @Inject('baseurl') imageurl: any) {
    this._imageurl = imageurl
  }

  ngOnInit(): void {
    this.getassignment()
  }

  getsanitizer(image: any) {
    // console.log(this._imageurl+'/'+image)
    return this.trusturl.bypassSecurityTrustResourceUrl(this._imageurl + '/' + image)
  }

  allassignment = []
  public getassignment() {
    this.assignment.getassignment().subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Assignment)
        this.allassignment = res.Assignment
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

  getDate(date: any) {
    return date.split("T", 1)
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
        this.assignment.deleteedit({ "_id": id }).subscribe(
          (res: any) => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getassignment()
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
