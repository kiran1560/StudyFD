import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course/course.service';

@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.css']
})
export class EditcourseComponent implements OnInit {

  editcourse = new FormGroup({
    _id: new FormControl(''),
    course_name: new FormControl(''),
    duration: new FormControl('')
  })

  constructor(private spinner:NgxSpinnerService, private toastr:ToastrService, private course:CourseService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editcourse.patchValue({ '_id': this.route.snapshot.paramMap.get('id') })
    this.edit()
  }

  edit() {
    this.spinner.show()
    this.course.fetchcoursebyid({ '_id': this.editcourse.value._id }).subscribe(
      (res: any) => {
        this.spinner.hide()
        //  console.log(res.Teacher)
        this.editcourse.patchValue({ 'course_name': res.Teacher.course_name })
        this.editcourse.patchValue({ 'duration': res.Teacher.duration })
      },
      err => {
        this.spinner.hide()
      }
    )
  }

  submit() {
    this.spinner.show()
    this.course.editcourse(this.editcourse.value).subscribe(
      (res: any) => {
        this.spinner.hide()
       // console.log(res)
        if (res.success) {
          this.toastr.success('success', res.message)
          this.router.navigateByUrl('/layout/listcourse')
        }
      },
      err => {
        this.spinner.hide()
        //console.log(err)
        this.toastr.error("Error", err)
        this.router.navigateByUrl('/layout/listcourse')
      }
    )
  }

}
