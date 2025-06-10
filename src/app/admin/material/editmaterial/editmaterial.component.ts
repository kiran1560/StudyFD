import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BatchesService } from 'src/app/shared/batches/batches.service';
import { CourseService } from 'src/app/shared/course/course.service';
import { MaterialService } from 'src/app/shared/material/material.service';

@Component({
  selector: 'app-editmaterial',
  templateUrl: './editmaterial.component.html',
  styleUrls: ['./editmaterial.component.css']
})
export class EditmaterialComponent implements OnInit {

  editmaterial = new FormGroup({
    _id: new FormControl(''),
    course_id: new FormControl(''),
    batch_id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    upload_file: new FormControl(''),
  })


  constructor(private spinner: NgxSpinnerService, private router: Router, private route: ActivatedRoute, private course: CourseService, private batch: BatchesService, private toastr: ToastrService, private material: MaterialService) { }

  ngOnInit(): void {
    this.editmaterial.patchValue({ '_id': this.route.snapshot.paramMap.get('id') })
    this.edit()
    this.getcourse()
    this.getbatches()
  }

  upload(event:any){
    this.editmaterial.patchValue({ 'upload_file': event.target.files[0] }) 
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
        // console.log("batches",res.Teacher)
        this.batches = res.Teacher
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


  edit() {
    this.spinner.show()
    this.material.fetchmaterialbyid({ '_id': this.editmaterial.value._id }).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Material)
        this.editmaterial.patchValue({ 'course_id': res.Material.course_id._id })
        this.editmaterial.patchValue({ 'batch_id': res.Material.batch_id._id })
        this.editmaterial.patchValue({ 'title': res.Material.title })
        this.editmaterial.patchValue({ 'description': res.Material.description })
        this.editmaterial.patchValue({ 'upload_file': res.Material.upload_file })

      },
      err => {
        this.spinner.hide()
      }
    )
  }

  submit() {
    this.spinner.show()
    // console.log(this.editmaterial.value)
    var d = new FormData()
    d.append('_id', this.editmaterial.value._id)
    d.append('course_id', this.editmaterial.value.course_id)
    d.append('batch_id', this.editmaterial.value.batch_id)
    d.append('title', this.editmaterial.value.title)
    d.append('description', this.editmaterial.value.description)
    d.append('upload_file', this.editmaterial.value.upload_file)

    this.material.editmaterial(d).subscribe(
      (res: any) => {
        this.spinner.hide()
        //  console.log(res)
        if (res.success) {
          this.toastr.success('success', res.message)
          this.router.navigateByUrl('/teacherlayout/listmaterial')
        }
      },
      err => {
        this.spinner.hide()
        // console.log(err)
        this.toastr.error("Error", err)
        this.router.navigateByUrl('/teacherlayout/listmaterial')
      }
    )
  }

}
