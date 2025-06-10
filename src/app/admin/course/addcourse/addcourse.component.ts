import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course/course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  addcourse = new FormGroup({
    course_name:new FormControl(''),
    duration:new FormControl('')
  })

  constructor(private course : CourseService, private spinner: NgxSpinnerService, private toastr: ToastrService,private route:Router ) { }

  ngOnInit(): void {
  }

  submit() {
    this.spinner.show()
    this.course.addcourse(this.addcourse.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
        if (res.Success) {
          this.toastr.success('success', res.message)
          this.route.navigateByUrl('/layout/listcourse')
        }
       
      },
      err=>{
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error",err)
        this.route.navigateByUrl('/layout/listcourse')
      }
    )
  }

}
