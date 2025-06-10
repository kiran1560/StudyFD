import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { StudentassignmentService } from 'src/app/shared/studentassignment/studentassignment.service';

@Component({
  selector: 'app-allassignment',
  templateUrl: './allassignment.component.html',
  styleUrls: ['./allassignment.component.css']
})
export class AllassignmentComponent implements OnInit {

  baseurl : any
  constructor(private router : Router,private spinner : NgxSpinnerService, private toastr : ToastrService, private studentassignment : StudentassignmentService,private trusturl : DomSanitizer,@Inject('baseurl') _baseurl:any) { 
    this.baseurl = _baseurl
  }

  ngOnInit(): void {
    this.getall()
  }

  getfile(image:any){
    return this.trusturl.bypassSecurityTrustResourceUrl(this.baseurl+"/"+image)
  }

  data = []
  getall(){
    this.spinner.show()
    this.studentassignment.getall({}).subscribe(
      (res:any)=>{
        this.spinner.hide()
        this.data = res.data
        console.log(this.data)
      },
      err=>{
        this.spinner.hide()
      }
    )
  }
  
}
