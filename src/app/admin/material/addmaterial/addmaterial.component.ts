import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import { CourseService } from 'src/app/shared/course/course.service';
import { MaterialService } from 'src/app/shared/material/material.service';

@Component({
  selector: 'app-addmaterial',
  templateUrl: './addmaterial.component.html',
  styleUrls: ['./addmaterial.component.css']
})
export class AddmaterialComponent implements OnInit {

  addmaterial = new FormGroup({
    course_id: new FormControl(''),
    batch_id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    upload_file: new FormControl(''),
  })

  constructor(private spinner: NgxSpinnerService, private course: CourseService, private toastr: ToastrService, private route: Router, private batch: BatchesService, private material: MaterialService) { }

  ngOnInit(): void {
    this.getcourse()
    // this.getbatches()
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

  upload(event: any) {
    this.addmaterial.patchValue({ 'upload_file': event.target.files[0] })
  }
  
  getdate(d: any) {
    var dd = d.split('T');
    return dd[0]
  }

  submit() {
    this.spinner.show()
    var d = new FormData()
    d.append('course_id', this.addmaterial.value.course_id)
    d.append('batch_id', this.addmaterial.value.batch_id)
    d.append('title', this.addmaterial.value.title)
    d.append('description', this.addmaterial.value.description)
    d.append('upload_file', this.addmaterial.value.upload_file)

    this.material.addmaterial(d).subscribe(
      (res: any) => {
        // console.log(res)
        this.spinner.hide()
        if (res.Success) {
          this.toastr.success('success', res.Message)
          this.route.navigateByUrl('/teacherlayout/listmaterial')
        }
        else {

          this.toastr.error("error", res.Message)
          this.route.navigateByUrl('/teacherlayout/listmaterial')
        }
      },
      err => {
        this.spinner.hide()
      }
    )
  }
}
