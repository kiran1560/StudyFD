import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AssignmentService } from 'src/app/shared/assignment/assignment.service';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import { CourseService } from 'src/app/shared/course/course.service';

@Component({
  selector: 'app-editassignment',
  templateUrl: './editassignment.component.html',
  styleUrls: ['./editassignment.component.css']
})
export class EditassignmentComponent implements OnInit {

  editassignment = new FormGroup({
    course_id: new FormControl(''),
    batch_id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    upload_file: new FormControl(''),
    marks: new FormControl(''),
    due_date: new FormControl(''),
    _id: new FormControl('')
  })

  constructor(private spinner: NgxSpinnerService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute, private assignment: AssignmentService, private course: CourseService, private batch: BatchesService) { }

  ngOnInit(): void {
    this.editassignment.patchValue({ '_id': this.route.snapshot.paramMap.get('id') })
    this.edit()
    this.getcourse()
    this.getbatches()
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
  public getbatches() {
    this.spinner.show()
    this.batch.getbatches({}).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Teacher)
        this.batches = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

  edit() {
    // console.log('hey')
    this.spinner.show()
    // console.log(this.editassignment.value._id)
    this.assignment.fetchassignmentbyid({ '_id': this.editassignment.value._id }).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Assignment)
        this.editassignment.patchValue({ 'course_id': res.Assignment.course_id._id })
        this.editassignment.patchValue({ 'batch_id': res.Assignment.batch_id._id })
        this.editassignment.patchValue({ 'title': res.Assignment.title })
        this.editassignment.patchValue({ 'description': res.Assignment.description })
        this.editassignment.patchValue({ 'upload_file': res.Assignment.upload_file })
        this.editassignment.patchValue({ 'marks': res.Assignment.marks })
        this.editassignment.patchValue({ 'due_date': (res.Assignment.due_date).split('T',1) })
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

  upload(event: any) {
    this.editassignment.patchValue({ 'upload_file': event.target.files[0] })
  }

  getdate(d: any) {
    var dd = d.split('T');
    return dd[0]
  }

  submit() {
    this.spinner.show()
    // console.log(this.editassignment.value)
    const data = new FormData()

    data.append('_id', this.editassignment.value._id)
    data.append('course_id', this.editassignment.value.course_id)
    data.append('batch_id', this.editassignment.value.batch_id)
    data.append('title', this.editassignment.value.title)
    data.append('description', this.editassignment.value.description)
    data.append('upload_file', this.editassignment.value.upload_file)
    data.append('marks', this.editassignment.value.marks)
    data.append('due_date', this.editassignment.value.due_date)

    this.assignment.editassignment(data).subscribe(
      (res: any) => {
        this.spinner.hide()
        //  console.log(res)
        if (res.success) {
          this.toastr.success('success', res.message)
          this.router.navigateByUrl('/teacherlayout/listassignment')
        }
      },
      err => {
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error", err)
        this.router.navigateByUrl('/layout/listassignment')
      }
    )
  }


}
