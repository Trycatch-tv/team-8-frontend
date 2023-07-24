import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TableTeachersComponent } from './table-teachers/table-teachers.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { HomeComponent } from './home/home.component';
import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

import { ToastModule } from 'primeng/toast';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    TableStudentsComponent,
    TableTeachersComponent,
    TableCoursesComponent,
    HomeComponent,
    AddTeacherComponent
  ],
  providers:[
    MessageService
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    ToastModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule
  ]
})
export class DashboardAdminModule { }
