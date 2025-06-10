import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { TeacherbatchesService } from 'src/app/shared/teacherbatches/teacherbatches.service';

@Component({
  selector: 'app-studentbybatch',
  templateUrl: './studentbybatch.component.html',
  styleUrls: ['./studentbybatch.component.css']
})
export class StudentbybatchComponent implements OnInit {

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private teacherbatches: TeacherbatchesService, private auth: AuthService, private router: Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getbatches()
  }

  batch = []
  getbatches() {
    this.spinner.show()
    this.teacherbatches.studentBybatches({ 'batchId': this.route.snapshot.paramMap.get('batchId') }).subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res.data)
        this.batch = res.data
      },
      err => {
        this.spinner.hide()
        // console.log(err)
      }
    )
  }

 

}
