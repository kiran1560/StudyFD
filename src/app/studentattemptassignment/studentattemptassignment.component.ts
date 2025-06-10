import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import { StudentbatchesService } from '../shared/studentbatches/studentbatches.service';

@Component({
  selector: 'app-studentattemptassignment',
  templateUrl: './studentattemptassignment.component.html',
  styleUrls: ['./studentattemptassignment.component.css']
})
export class StudentattemptassignmentComponent implements OnInit {

  attemptanswer = new FormGroup({
    '_id': new FormControl(''),
    'studentAnswerFile': new FormControl(''),
  })

  constructor(private spinner: NgxSpinnerService, private router: Router, private studentassignment: StudentbatchesService, private auth: AuthService, private route: ActivatedRoute,private toastr : ToastrService) { }

  ngOnInit(): void {
    this.attemptanswer.patchValue({ '_id': this.route.snapshot.paramMap.get('id') })
  }

  upload(event: any) {
    this.attemptanswer.patchValue({ 'studentAnswerFile': event.target.files[0] })
  }

  submit() {
    this.spinner.show()
    const d = new FormData()
    d.append('_id',this.attemptanswer.value._id)
    d.append('studentAnswerFile',this.attemptanswer.value.studentAnswerFile)
    this.studentassignment.attemptassignment(d).subscribe(
      (res:any)=>{
        this.spinner.hide()
        // console.log(res)
          this.toastr.success('success', res.message)
          this.router.navigateByUrl('/studentlayout/studentdashboard')        
      },
      err=>{
        this.spinner.hide()
        // console.log(err)
      }
    )
  }
}
