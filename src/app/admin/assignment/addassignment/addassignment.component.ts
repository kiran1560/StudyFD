import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import { CourseService } from 'src/app/shared/course/course.service';

@Component({
  selector: 'app-addassignment',
  templateUrl: './addassignment.component.html',
  styleUrls: ['./addassignment.component.css']
})
export class AddassignmentComponent implements OnInit {

  addassignment = new FormGroup({
    course_id: new FormControl(''),
    batch_id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    upload_file: new FormControl(''),
    marks: new FormControl(''),
    due_date: new FormControl('')
  })

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private route: Router, private assignment: AssignmentService, private course: CourseService, private batch: BatchesService) { }

  ngOnInit(): void {
    this.getcourse()
    // this.getbatches()
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
  public getbatches(event: any) {
    this.spinner.show()
    this.batch.getbatches({ 'course_id': event }).subscribe(
      (res: any) => {
        this.spinner.hide()
        console.log(res)
        this.batches = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }


  upload(event: any) {
    this.addassignment.patchValue({ 'upload_file': event.target.files[0] })
  }

  getdate(d: any) {
    var dd = d.split('T');
    return dd[0]
  }

  submit() {
    // console.log(this.addassignment.value)
    const data = new FormData()

    data.append('course_id', this.addassignment.value.course_id)
    data.append('batch_id', this.addassignment.value.batch_id)
    data.append('title', this.addassignment.value.title)
    data.append('description', this.addassignment.value.description)
    data.append('upload_file', this.addassignment.value.upload_file)
    data.append('marks', this.addassignment.value.marks)
    data.append('due_date', this.addassignment.value.due_date)

    this.spinner.show();
    this.assignment.addassignment(data).subscribe(
      (res: any) => {
        if (res.Success) {
          this.spinner.hide();
          this.toastr.success('success', res.message)
          this.route.navigateByUrl('/teacherlayout/listassignment')
        }
      },
      err => {
        this.spinner.hide()
        this.toastr.error("Error", err)
        this.route.navigateByUrl('/teacherlayout/listassignment')
      }
    )
  }


}
