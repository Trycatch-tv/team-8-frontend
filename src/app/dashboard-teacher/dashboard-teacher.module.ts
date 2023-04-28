import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { DashboardTeacherRoutingModule } from './dashboard-teacher-routing.module';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { ViewStudentComponent } from './view-student/view-student.component';

@NgModule({
  declarations: [
    HomeComponent,
    TableStudentsComponent,
    TableCoursesComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    DetailCourseComponent,
    ViewStudentComponent
  ],
  imports: [
    CommonModule,
    DashboardTeacherRoutingModule,
    ToastModule,
    ButtonModule,
    FormsModule
  ]
})
export class DashboardTeacherModule { }
