import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminitrationScModule } from './modules/adminitration-sc/adminitration-sc.module';
import { SidebarTeacherComponent } from './layout/sidebar-teacher/sidebar-teacher.component';
import { DashboardAdminModule } from './modules/dashboard-admin/dashboard-admin.module';
import { DashboardTeacherModule } from './modules/dashboard-teacher/dashboard-teacher.module';
import { SidebarAdminComponent } from './layout/sidebar-admin/sidebar-admin.component';
import { RouterModule } from '@angular/router'; // Agregar esta línea de importación
import { HttpClientModule } from '@angular/common/http';

import { ToastModule } from 'primeng/toast';
import { StudentContentModule } from './modules/student-content/student-content.module';
import { EditStudentComponent } from './layout/edit-student/edit-student.component';
import { ViewStudentComponent } from './layout/view-student/view-student.component';
import { ViewTeacherComponent } from './layout/view-teacher/view-teacher.component';
import { MessageService } from 'primeng/api';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTeacherComponent } from './layout/edit-teacher/edit-teacher.component';
import { EditCourseComponent } from './layout/edit-course/edit-course.component';
import { ViewCourseComponent } from './layout/view-course/view-course.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarTeacherComponent,
    SidebarAdminComponent,
    EditStudentComponent,
    ViewStudentComponent,
    ViewTeacherComponent,
    EditTeacherComponent,
    EditCourseComponent,
    ViewCourseComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminitrationScModule,
    DashboardAdminModule,
    DashboardTeacherModule,
    RouterModule,
    HttpClientModule,
    StudentContentModule,
    ToastModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
