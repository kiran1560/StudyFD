import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TeacherbatchesService } from 'src/app/shared/teacherbatches/teacherbatches.service';

@Component({
  selector: 'app-myallbatches',
  templateUrl: './myallbatches.component.html',
  styleUrls: ['./myallbatches.component.css']
})
export class MyallbatchesComponent implements OnInit {

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private teacherbatches: TeacherbatchesService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getbatches()
  }

  batch = []
  getbatches() {
    this.spinner.show()
    this.teacherbatches.allbatches({ 'teacher_id': this.auth.getTeacherId() }).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.Teacher)
        this.batch = res.Teacher
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

  getDate(date:any){
    return date.split('T',1)
  }
  
}
