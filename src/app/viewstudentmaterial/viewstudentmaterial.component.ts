import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { StudentbatchesService } from '../shared/studentbatches/studentbatches.service';

@Component({
  selector: 'app-viewstudentmaterial',
  templateUrl: './viewstudentmaterial.component.html',
  styleUrls: ['./viewstudentmaterial.component.css']
})
export class ViewstudentmaterialComponent implements OnInit {

  fileurl: any
  constructor(private router: Router, private studentassignedbatch: StudentbatchesService, private spinner: NgxSpinnerService, private route: ActivatedRoute, private trusturl: DomSanitizer, @Inject('baseurl') _baseurl: any) {
    this.fileurl = _baseurl
  }

  batch_id: any
  ngOnInit(): void {
    this.batch_id = this.route.snapshot.paramMap.get('batchid')
    this.getmat()
  }

  getFile(file:any) {
    return this.trusturl.bypassSecurityTrustResourceUrl(this.fileurl+"/"+file)
  }
  alldata = []
  getmat() {
    this.spinner.show()
    this.studentassignedbatch.studentbatchmaterial({ 'batch_id': this.batch_id }).subscribe(
      (res: any) => {
        this.spinner.hide()
        this.alldata = res.Material
      },
      err => {
        this.spinner.hide()

      }
    )
  }
}
