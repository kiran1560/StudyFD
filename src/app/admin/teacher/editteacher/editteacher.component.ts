import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';

@Component({
  selector: 'app-editteacher',
  templateUrl: './editteacher.component.html',
  styleUrls: ['./editteacher.component.css']
})
export class EditteacherComponent implements OnInit {

  addteacher = new FormGroup({
    _id: new FormControl(''),
    teacher_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone_no: new FormControl(''),
    salary: new FormControl(''),
    qualification: new FormControl(''),
    city: new FormControl(''),
    gender: new FormControl('')
  })

  constructor(private teacherservice: TeacherService, private spinner: NgxSpinnerService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addteacher.patchValue({ '_id': this.route.snapshot.paramMap.get('id') })
    this.edit()
  }

  edit() {
    this.spinner.show()
    this.teacherservice.singleteacher({ '_id': this.addteacher.value._id }).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Teacher)
        this.addteacher.patchValue({ 'teacher_name': res.Teacher.teacher_name })
        this.addteacher.patchValue({ 'email': res.Teacher.email })
        this.addteacher.patchValue({ 'phone_no': res.Teacher.phone_no })
        this.addteacher.patchValue({ 'salary': res.Teacher.salary })
        this.addteacher.patchValue({ 'qualification': res.Teacher.qualification })
        this.addteacher.patchValue({ 'city': res.Teacher.city })
        this.addteacher.patchValue({ 'gender': res.Teacher.gender })
        this.addteacher.patchValue({ 'password': res.Teacher.password })
      },
      err => {
        this.spinner.hide()
      }
    )
  }

  submit() {
    this.spinner.show()
    this.teacherservice.updateteacher(this.addteacher.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        if (res.success) {
          this.toastr.success('success', res.message)
          this.router.navigateByUrl('/layout/listteacher')
        }
      },
      err => {
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error", err)
        this.router.navigateByUrl('/layout/listteacher')
      }
    )
  }

}
