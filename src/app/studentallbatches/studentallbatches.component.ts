import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../shared/auth/auth.service';
import { StudentbatchesService } from '../shared/studentbatches/studentbatches.service';

@Component({
  selector: 'app-studentallbatches',
  templateUrl: './studentallbatches.component.html',
  styleUrls: ['./studentallbatches.component.css']
})
export class StudentallbatchesComponent implements OnInit {

  constructor(private spinne: NgxSpinnerService, private router: Router, private studentbatches: StudentbatchesService, private auth: AuthService) { }

  ngOnInit(): void {
    this.allbatches()
  }

  batch :any
  allbatches() {
    this.spinne.show()
    this.studentbatches.studentassignedbatches({'studentId':this.auth.getStudentId()}).subscribe(
      (res:any)=>{
        this.spinne.hide()
        // console.log(res.data)
        this.batch = res.data
      },
      err=>{
        this.spinne.hide()
        console.log(err)
      }
    )
  }



}
