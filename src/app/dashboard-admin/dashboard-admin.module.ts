import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TableTeachersComponent } from './table-teachers/table-teachers.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { HomeComponent } from './home/home.component';
import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';


@NgModule({
  declarations: [
    TableStudentsComponent,
    TableTeachersComponent,
    TableCoursesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule
  ]
})
export class DashboardAdminModule { }
