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
import { LoginAdminComponent } from './adminitration-sc/login-admin/login-admin.component';
import { LoginTeacherComponent } from './adminitration-sc/login-teacher/login-teacher.component';
import { AuthGuard } from './guards/auth/auth.guard';

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
    path:'login/teacher',
    component:LoginTeacherComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'dashboard-admin/edit_student/:id',
    component:EditStudentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'dashboard-admin/detail_student/:id',
    component:ViewStudentComponent,
    canActivate:[AuthGuard],

  },
  {
    path:'login/admin',
    component:LoginAdminComponent,

  },
  {
    path:'dashboard-admin/edit_teacher/:id',
    component:EditTeacherComponent,
    canActivate:[AuthGuard],

  },
  {
    path:'dashboard-admin/detail_teacher/:id',
    component:ViewTeacherComponent,
    canActivate:[AuthGuard],

  },


  {
    path:'dashboard-admin/edit_course/:id',
    component:EditCourseComponent,
    canActivate:[AuthGuard],

  },
  {
    path:'dashboard-admin/detail_course/:id',
    component:ViewCourseComponent,
    canActivate:[AuthGuard],

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
