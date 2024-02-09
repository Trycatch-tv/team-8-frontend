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



import { MatSlideToggleModule } from '@angular/material/slide-toggle';



import { MatIconModule } from '@angular/material/icon'; // Importa el módulo de iconos


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

import { MatStepperModule } from '@angular/material/stepper'; // Asegúrate de importar el módulo del stepper u otros módulos que necesites

import { ConfirmationEmailModule } from './modules/confirmation-email/confirmation-email.module';
import { PasswordResetModule } from './modules/password-reset/password-reset.module';

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
    MatSlideToggleModule,
    MatStepperModule,
    MatIconModule,
    ConfirmationEmailModule,
    PasswordResetModule,


  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
