import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';
import { TeacherService } from 'src/app/shared/teacher/teacher.service';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  addteacher = new FormGroup({
    teacher_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone_no: new FormControl(''),
    salary: new FormControl(''),
    qualification: new FormControl(''),
    city: new FormControl(''),
    gender: new FormControl('')
  })

  constructor(private teacherservice: TeacherService, private spinner: NgxSpinnerService, private route: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  submit() {
    this.spinner.show()
    this.teacherservice.addteacher(this.addteacher.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        if (res.Success) {
          this.toastr.success('success', res.message)
          this.route.navigateByUrl('/layout/listteacher')
        }

      },
      err => {
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error", err)
        this.route.navigateByUrl('/layout/listteacher')
      }
    )
  }

}