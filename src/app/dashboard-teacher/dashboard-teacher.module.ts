import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { DashboardTeacherRoutingModule } from './dashboard-teacher-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    TableStudentsComponent,
    TableCoursesComponent
  ],
  imports: [
    CommonModule,
    DashboardTeacherRoutingModule,
  ]
})
export class DashboardTeacherModule { }
