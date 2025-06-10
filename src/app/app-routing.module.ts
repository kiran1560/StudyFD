import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddassignmentComponent } from './admin/assignment/addassignment/addassignment.component';
import { EditassignmentComponent } from './admin/assignment/editassignment/editassignment.component';
import { ListassignmentComponent } from './admin/assignment/listassignment/listassignment.component';
import { AddbatchesComponent } from './admin/batches/addbatches/addbatches.component';
import { EditbatchesComponent } from './admin/batches/editbatches/editbatches.component';
import { ListbatchesComponent } from './admin/batches/listbatches/listbatches.component';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { EditcourseComponent } from './admin/course/editcourse/editcourse.component';
import { ListcourseComponent } from './admin/course/listcourse/listcourse.component';
import { AddmaterialComponent } from './admin/material/addmaterial/addmaterial.component';
import { EditmaterialComponent } from './admin/material/editmaterial/editmaterial.component';
import { ListmaterialComponent } from './admin/material/listmaterial/listmaterial.component';
import { AddstudentComponent } from './admin/student/addstudent/addstudent.component';
import { EditstudentComponent } from './admin/student/editstudent/editstudent.component';
import { ListstudentComponent } from './admin/student/liststudent/liststudent.component';
import { AddteacherComponent } from './admin/teacher/addteacher/addteacher.component';
import { EditteacherComponent } from './admin/teacher/editteacher/editteacher.component';
import { ListteacherComponent } from './admin/teacher/listteacher/listteacher.component';
import { AddassignbatchComponent } from './assignbatch/addassignbatch/addassignbatch.component';
import { EditassignbatchComponent } from './assignbatch/editassignbatch/editassignbatch.component';
import { ListassignbatchComponent } from './assignbatch/listassignbatch/listassignbatch.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { StudentallbatchesComponent } from './studentallbatches/studentallbatches.component';
import { AllassignmentComponent } from './studentassignment/allassignment/allassignment.component';
import { EvalassignmentComponent } from './studentassignment/evalassignment/evalassignment.component';
import { StudentattemptassignmentComponent } from './studentattemptassignment/studentattemptassignment.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentlayoutComponent } from './studentlayout/studentlayout.component';
import { MyallbatchesComponent } from './teacher/myallbatches/myallbatches.component';
import { StudentbybatchComponent } from './teacher/studentbybatch/studentbybatch.component';
import { TeacherdashboardComponent } from './teacher/teacherdashboard/teacherdashboard.component';
import { TeacherlayoutComponent } from './teacher/teacherlayout/teacherlayout.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ViewstudentassignmentComponent } from './viewstudentassignment/viewstudentassignment.component';
import { ViewstudentmaterialComponent } from './viewstudentmaterial/viewstudentmaterial.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout/dashboard', pathMatch: 'full' },
  {
    path: "layout", component: LayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: 'addcourse', component: AddcourseComponent },
      { path: 'listcourse', component: ListcourseComponent },
      { path: 'editcourse/:id', component: EditcourseComponent },
      { path: 'addteacher', component: AddteacherComponent },
      { path: 'listteacher', component: ListteacherComponent },
      { path: 'editteacher/:id', component: EditteacherComponent },
      { path: 'addstudent', component: AddstudentComponent },
      { path: 'liststudent', component: ListstudentComponent },
      { path: 'editstudent/:id', component: EditstudentComponent },
      { path: 'addbatches', component: AddbatchesComponent },
      { path: 'listbatches', component: ListbatchesComponent },
      { path: 'editbatches/:id', component: EditbatchesComponent },
      // { path: 'addassignment', component: AddassignmentComponent },
      // { path: 'listassignment', component: ListassignmentComponent },
      // { path: 'editassignment/:id', component: EditassignmentComponent },
      // { path: 'addmaterial', component: AddmaterialComponent },
      // { path: 'editmaterial/:id', component: EditmaterialComponent },
      // { path: 'listmaterial', component: ListmaterialComponent },
      { path: 'addassignbatch', component: AddassignbatchComponent },
      { path: 'listassignbatch', component: ListassignbatchComponent },
      { path: 'editassignbatch/:id', component: EditassignbatchComponent },
      // { path: 'allstudentassignment', component: AllassignmentComponent },
      // { path: 'singlestudentassignment/:id', component: EvalassignmentComponent },

    ]
  },
  {
    path: 'studentlayout', component: StudentlayoutComponent,
    children: [
      { path: 'studentdashboard', component: StudentdashboardComponent },
      { path: 'assignedBatches', component: StudentallbatchesComponent },
      { path: 'viewstudentmaterial/:batchid', component: ViewstudentmaterialComponent },
      { path: 'viewstudentassignment/:batchid', component: ViewstudentassignmentComponent },
      { path: 'attemptassignment/:id', component: StudentattemptassignmentComponent },
    ]
  },
  {
    path: 'teacherlayout', component: TeacherlayoutComponent,
    children: [
      { path: 'teacherdashboard', component: TeacherdashboardComponent },
      { path: 'myallbatches', component: MyallbatchesComponent },
      { path: 'studentbybatch/:batchId', component: StudentbybatchComponent },
      { path: 'addassignment', component: AddassignmentComponent },
      { path: 'listassignment', component: ListassignmentComponent },
      { path: 'editassignment/:id', component: EditassignmentComponent },
      { path: 'addmaterial', component: AddmaterialComponent },
      { path: 'editmaterial/:id', component: EditmaterialComponent },
      { path: 'listmaterial', component: ListmaterialComponent },
      { path: 'allstudentassignment', component: AllassignmentComponent },
      { path: 'singlestudentassignment/:id', component: EvalassignmentComponent },

    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }