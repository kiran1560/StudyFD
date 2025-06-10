import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignbatchService } from 'src/app/shared/assignbatch/assignbatch.service';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import { CourseService } from 'src/app/shared/course/course.service';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-addassignbatch',
  templateUrl: './addassignbatch.component.html',
  styleUrls: ['./addassignbatch.component.css']
})
export class AddassignbatchComponent implements OnInit {
 
  addbatch = new FormGroup({
    courseId: new FormControl(''),
    batchId: new FormControl(''),
    studentId: new FormControl(''),
  })

  constructor(private spinner: NgxSpinnerService, private course: CourseService, private toastr: ToastrService, private route: Router, private batch: BatchesService, private assignbatch: AssignbatchService,private student : StudentService) { }

  ngOnInit(): void {
    this.getcourse()
    // this.getbatches()
    this.getstudents()
  }

  allcourses = []
  public getcourse() {
    this.spinner.show()
    this.course.getcourse().subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        this.allcourses = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

  batches = []
  public getbatches(event:any) {
    this.spinner.show()
    this.batch.getbatches({'course_id':event}).subscribe(
      (res: any) => {
        this.spinner.hide();
        // console.log(res.Teacher)
        // console.log("batches"+res.Teacher)
        this.batches = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }
  students = []
  public getstudents() {
    this.spinner.show()
    this.student.getstudent({}).subscribe(
      (res: any) => {
        this.spinner.hide();
        // console.log(res.Data)
        // console.log("batches"+res.Teacher)
        this.students = res.Data
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

  getdate(d: any) {
    var dd = d.split('T');
    return dd[0]
  }

  submit(){
    this.spinner.show()
    this.assignbatch.add(this.addbatch.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        if (res.success) {
          this.toastr.success('success', res.message)
          this.route.navigateByUrl('/layout/listassignbatch')
        }
        else{
          this.toastr.warning('warning', res.message)
          // this.route.navigateByUrl('/layout/listassignbatch')
          
        }
      },
      err => {
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error", err)
        this.route.navigateByUrl('/layout/listassignbatch')
      }
    )
  }
}
