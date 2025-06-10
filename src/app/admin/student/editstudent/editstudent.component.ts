import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/shared/student/student.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  addstudent=new FormGroup({
    _id:new FormControl(''),
    student_name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    phone_no:new FormControl(''),
    roll_no:new FormControl(''),
    qualification:new FormControl(''),
    city:new FormControl(''),
    gender:new FormControl('')
  })


  constructor(private studentservice: StudentService, private spinner: NgxSpinnerService, private router: Router, private toastr: ToastrService, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.addstudent.patchValue({ '_id': this.route.snapshot.paramMap.get('id') })
    this.edit()
  }

  edit() {
    this.spinner.show()
    this.studentservice.singlestudent({ '_id': this.addstudent.value._id }).subscribe(
      (res: any) => {
        // console.log(res)
        this.spinner.hide()
        this.addstudent.patchValue({ 'student_name': res.Data.student_name })
        this.addstudent.patchValue({ 'email': res.Data.email })
        this.addstudent.patchValue({ 'phone_no': res.Data.phone_no })
        this.addstudent.patchValue({ 'roll_no': res.Data.roll_no })
        this.addstudent.patchValue({ 'qualification': res.Data.qualification })
        this.addstudent.patchValue({ 'city': res.Data.city })
        this.addstudent.patchValue({ 'gender': res.Data.gender })
        this.addstudent.patchValue({ 'password': res.Data.password })
      },
      err => {
        this.spinner.hide()
      }
    )
  }

  submit() {
    this.spinner.show()
    this.studentservice.updatestudent(this.addstudent.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        if (res.success) {
          this.toastr.success('success', res.message)
          this.router.navigateByUrl('/layout/liststudent')
        }
      },
      err => {
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error", err)
        this.router.navigateByUrl('/layout/liststudent')
      }
    )
  }

}

