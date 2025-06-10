import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../shared/auth/auth.service';
import { StudentbatchesService } from '../shared/studentbatches/studentbatches.service';

@Component({
  selector: 'app-viewstudentassignment',
  templateUrl: './viewstudentassignment.component.html',
  styleUrls: ['./viewstudentassignment.component.css']
})
export class ViewstudentassignmentComponent implements OnInit {


  fileurl: any
  constructor(private router: Router, private studentassignedbatch: StudentbatchesService, private spinner: NgxSpinnerService, private route: ActivatedRoute, private trusturl: DomSanitizer, @Inject('baseurl') _baseurl: any, private auth: AuthService) {
    this.fileurl = _baseurl
  }

  batch_id: any
  ngOnInit(): void {
    this.batch_id = this.route.snapshot.paramMap.get('batchid')
    this.getmat()
  }

  getFile(file: any) {
    return this.trusturl.bypassSecurityTrustResourceUrl(this.fileurl + "/" + file)
  }
  
  alldata = []
  getmat() {
    this.spinner.show()
    this.studentassignedbatch.studentbatchassignment({ 'batch_id': this.batch_id, 'studentId': this.auth.getStudentId() }).subscribe(
      (res: any) => {
        this.spinner.hide()
        console.log(res.data)
        this.alldata = res.data
      },
      err => {
        this.spinner.hide()

      }
    )
  }

  getDate(date: any) {
    return date.split('T', 1)
  }
}
