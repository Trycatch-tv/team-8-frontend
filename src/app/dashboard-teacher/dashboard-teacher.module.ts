import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';



@NgModule({
  declarations: [
    HomeComponent,
    TableStudentsComponent,
    TableCoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardTeacherModule { }
