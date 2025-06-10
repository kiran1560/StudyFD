import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { StudentassignmentService } from 'src/app/shared/studentassignment/studentassignment.service';

@Component({
  selector: 'app-evalassignment',
  templateUrl: './evalassignment.component.html',
  styleUrls: ['./evalassignment.component.css']
})
export class EvalassignmentComponent implements OnInit {

  evalform = new FormGroup({
    '_id': new FormControl(''),
    'marksObtained': new FormControl(''),
    'remarks': new FormControl(''),
  })

  constructor(private router: Router, private spinner: NgxSpinnerService, private toastr: ToastrService, private studentassignment: StudentassignmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.evalform.patchValue({ '_id': this.route.snapshot.paramMap.get('id') })
    this.getall()
  }

  stu: any
  getall() {
    this.spinner.show()
    this.studentassignment.singleassignment({ '_id': this.evalform.value._id }).subscribe(
      (res: any) => {
        this.spinner.hide()
        this.stu = res.data
        // console.log(this.stu)
      },
      err => {
        this.spinner.hide()
      }
    )
  }

  submit() {
    this.spinner.show()
    this.studentassignment.evaluate(this.evalform.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        console.log(res)
        if (res.success) {
          this.toastr.success('success', res.message)
          this.router.navigateByUrl('/teacherlayout/allstudentassignment')
        }
      },
      err => {
        this.spinner.hide()
        console.log(err)
        this.toastr.error("Error", err)
        this.router.navigateByUrl('/teacherlayout/allstudentassignment')
      }
    )
  }
}
