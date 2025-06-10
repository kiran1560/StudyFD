import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddteacherComponent } from './admin/teacher/addteacher/addteacher.component';
import { ListteacherComponent } from './admin/teacher/listteacher/listteacher.component';
import { EditteacherComponent } from './admin/teacher/editteacher/editteacher.component';
import { AddstudentComponent } from './admin/student/addstudent/addstudent.component';
import { ListstudentComponent } from './admin/student/liststudent/liststudent.component';
import { EditstudentComponent } from './admin/student/editstudent/editstudent.component';
import { AddbatchesComponent } from './admin/batches/addbatches/addbatches.component';
import { ListbatchesComponent } from './admin/batches/listbatches/listbatches.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ListcourseComponent } from './admin/course/listcourse/listcourse.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from '@ng-select/ng-select';
import { EditcourseComponent } from './admin/course/editcourse/editcourse.component';
import { EditbatchesComponent } from './admin/batches/editbatches/editbatches.component';
import { AddassignmentComponent } from './admin/assignment/addassignment/addassignment.component';
import { ListassignmentComponent } from './admin/assignment/listassignment/listassignment.component';
import { EditassignmentComponent } from './admin/assignment/editassignment/editassignment.component';
import { AddmaterialComponent } from './admin/material/addmaterial/addmaterial.component';
import { ListmaterialComponent } from './admin/material/listmaterial/listmaterial.component';
import { EditmaterialComponent } from './admin/material/editmaterial/editmaterial.component';
import { AddassignbatchComponent } from './assignbatch/addassignbatch/addassignbatch.component';
import { ListassignbatchComponent } from './assignbatch/listassignbatch/listassignbatch.component';
import { EditassignbatchComponent } from './assignbatch/editassignbatch/editassignbatch.component';
import { AllassignmentComponent } from './studentassignment/allassignment/allassignment.component';
import { EvalassignmentComponent } from './studentassignment/evalassignment/evalassignment.component';
import { StudentlayoutComponent } from './studentlayout/studentlayout.component';
import { StudentheaderComponent } from './studentlayout/studentheader/studentheader.component';
import { StudentfooterComponent } from './studentlayout/studentfooter/studentfooter.component';
import { StudentsidebarComponent } from './studentlayout/studentsidebar/studentsidebar.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentallbatchesComponent } from './studentallbatches/studentallbatches.component';
import { ViewstudentmaterialComponent } from './viewstudentmaterial/viewstudentmaterial.component';
import { ViewstudentassignmentComponent } from './viewstudentassignment/viewstudentassignment.component';
import { StudentattemptassignmentComponent } from './studentattemptassignment/studentattemptassignment.component';
import { TeacherlayoutComponent } from './teacher/teacherlayout/teacherlayout.component';
import { TeacherheaderComponent } from './teacher/teacherlayout/teacherheader/teacherheader.component';
import { TeacherfooterComponent } from './teacher/teacherlayout/teacherfooter/teacherfooter.component';
import { TeacherdashboardComponent } from './teacher/teacherdashboard/teacherdashboard.component';
import { TeachersidebarComponent } from './teacher/teacherlayout/teachersidebar/teachersidebar.component';
import { MyallbatchesComponent } from './teacher/myallbatches/myallbatches.component';
import { StudentbybatchComponent } from './teacher/studentbybatch/studentbybatch.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    AddcourseComponent,
    AddteacherComponent,
    ListteacherComponent,
    EditteacherComponent,
    AddstudentComponent,
    ListstudentComponent,
    EditstudentComponent,
    AddbatchesComponent,
    ListbatchesComponent,

    LoginComponent,
    RegisterComponent,
    ListcourseComponent,
    EditcourseComponent,
    EditbatchesComponent,
    AddassignmentComponent,
    ListassignmentComponent,
    EditassignmentComponent,
    AddmaterialComponent,
    ListmaterialComponent,
    EditmaterialComponent,
    AddassignbatchComponent,
    ListassignbatchComponent,
    EditassignbatchComponent,
    AllassignmentComponent,
    EvalassignmentComponent,
    StudentlayoutComponent,
    StudentheaderComponent,
    StudentfooterComponent,
    StudentsidebarComponent,
    StudentdashboardComponent,
    StudentallbatchesComponent,
    ViewstudentmaterialComponent,
    ViewstudentassignmentComponent,
    StudentattemptassignmentComponent,
    TeacherlayoutComponent,
    TeacherheaderComponent,
    TeacherfooterComponent,
    TeacherdashboardComponent,
    TeachersidebarComponent,
    MyallbatchesComponent,
    StudentbybatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
