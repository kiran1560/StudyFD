import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MaterialService } from 'src/app/shared/material/material.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listmaterial',
  templateUrl: './listmaterial.component.html',
  styleUrls: ['./listmaterial.component.css']
})
export class ListmaterialComponent implements OnInit {

  _imageurl: any
  constructor(private spinner:NgxSpinnerService, private material:MaterialService, private toastr:ToastrService, private trusturl: DomSanitizer, @Inject('baseurl') imageurl: any) {
    this._imageurl = imageurl
  }

  ngOnInit(): void {
    this.getmaterial()
  }

  getsanitizer(image: any) {
    // console.log(this._imageurl+'/'+image)
    return this.trusturl.bypassSecurityTrustResourceUrl(this._imageurl + '/' + image)
  }

  materials = []
  public getmaterial(){
    this.material.getmaterial().subscribe(
      (res: any) => {
        this.spinner.hide()
        // console.log(res)
          this.materials= res.Material
      },
      err=>{
        this.spinner.hide()
        // console.log(err)
      }
    )  
  }

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.material.deleteedit({"_id":id}).subscribe(
          (res:any)=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.getmaterial()
          },
          err=>{
            Swal.fire(
              'Error!',
              'Try Again',
              'error'
            )
          })
      }
    })
  }

}
