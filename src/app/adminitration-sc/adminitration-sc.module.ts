import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardTeacherComponent } from './dashboard-teacher/dashboard-teacher.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DetailsCourseComponent } from './details-course/details-course.component';
import { DetailsStudentComponent } from './details-student/details-student.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardTeacherComponent,
    DashboardAdminComponent,
    DetailsCourseComponent,
    DetailsStudentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminitrationScModule { }
