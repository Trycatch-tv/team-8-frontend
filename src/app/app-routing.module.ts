import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './adminitration-sc/login/login.component';
import { RegisterComponent } from './adminitration-sc/register/register.component';
import { HomeComponent } from './adminitration-sc/home/home.component';
import { EditStudentComponent } from './layout/edit-student/edit-student.component';
import { ViewStudentComponent } from './layout/view-student/view-student.component';
import { EditTeacherComponent } from './layout/edit-teacher/edit-teacher.component';
import { ViewTeacherComponent } from './layout/view-teacher/view-teacher.component';
import { EditCourseComponent } from './layout/edit-course/edit-course.component';
import { ViewCourseComponent } from './layout/view-course/view-course.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'dashboard-admin/edit_student/:id',
    component:EditStudentComponent
  },
  {
    path:'dashboard-admin/detail_student/:id',
    component:ViewStudentComponent
  },


  {
    path:'dashboard-admin/edit_teacher/:id',
    component:EditTeacherComponent
  },
  {
    path:'dashboard-admin/detail_teacher/:id',
    component:ViewTeacherComponent
  },


  {
    path:'dashboard-admin/edit_course/:id',
    component:EditCourseComponent
  },
  {
    path:'dashboard-admin/detail_course/:id',
    component:ViewCourseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
