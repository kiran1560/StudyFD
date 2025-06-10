import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { LoginService } from 'src/app/shared/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  value: any
  token: any

  constructor(private spinner: NgxSpinnerService, private router: Router, private toastr: ToastrService, private login: LoginService, private auth: AuthService) { }

  ngOnInit(): void {
    if (this.token != null) {
      this.router.navigateByUrl('/layout/dashboard')
    }
  }

  submit() {
    // console.log("In Login Submit")
    this.spinner.show();

    this.login.login(this.loginform.value).subscribe(
      (res: any) => {
        this.spinner.hide()
        console.log(res)
        // return
        if (res.success) {
          this.auth.setItems(res)
          this.toastr.success("Success", res.Message)
          if(res.data.userType == 1)
          this.router.navigateByUrl("/layout/dashboard")
          if(res.data.userType == 2)
          this.router.navigateByUrl("/studentlayout/studentdashboard")
          if(res.data.userType == 3)
          this.router.navigateByUrl("/teacherlayout/teacherdashboard")
        }
        else {
          // console.log(res)
          this.toastr.error(res.Message)
        }
      },
      (err: any) => {
        this.spinner.hide();
        // console.log(err)
      }
    )

  }
}
