import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import { CourseService } from 'src/app/shared/course/course.service';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';

@Component({
  selector: 'app-editbatches',
  templateUrl: './editbatches.component.html',
  styleUrls: ['./editbatches.component.css']
})
export class EditbatchesComponent implements OnInit {

  editbatches = new FormGroup({
    _id: new FormControl(''),
    course_id: new FormControl(''),
    teacher_id: new FormControl(''),
    time: new FormControl(''),
    starting_date: new FormControl('')
  })

  constructor(private spinner: NgxSpinnerService, private toastr: ToastrService, private batches: BatchesService, private route: ActivatedRoute, private router: Router, private course: CourseService, private teacherservice: TeacherService) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get('id'))
    this.editbatches.patchValue({ '_id': this.route.snapshot.paramMap.get('id') })
    // console.log(this.editbatches.value._id)
    this.getcourse()
    this.getteacher()
    this.edit()
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

  teachers = []
  public getteacher() {
    this.spinner.show()
    this.teacherservice.getteacher().subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Teacher)
        this.teachers = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )

  }

  edit() {
    this.spinner.show()
    this.batches.singlebatches({ '_id': this.editbatches.value._id }).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log("Edit response => ",res.Batches)
        this.editbatches.patchValue({ 'course_id': res.Batches.course_id._id })
        this.editbatches.patchValue({ 'teacher_id': res.Batches.teacher_id._id })
        this.editbatches.patchValue({ 'time': res.Batches.time })
        this.editbatches.patchValue({ 'starting_date': (res.Batches.starting_date).split('T', 1) })
      },
      err => {
        this.spinner.hide()
      }
    )
  }

  submit() {
    this.spinner.show()
    // console.log(this.editbatches.value) 
    this.batches.updatesbatches(this.editbatches.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        //  console.log(res)
        if (res.success) {
          this.toastr.success('success', res.message)
          this.router.navigateByUrl('/layout/listbatches')
        }
      },
      err => {
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error", err)
        this.router.navigateByUrl('/layout/listbatches')
      }
    )
  }

}



