import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-studentheader',
  templateUrl: './studentheader.component.html',
  styleUrls: ['./studentheader.component.css']
})
export class StudentheaderComponent implements OnInit {

  constructor(private auth : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.remove()
    this.router.navigateByUrl('/login')
  }

}
