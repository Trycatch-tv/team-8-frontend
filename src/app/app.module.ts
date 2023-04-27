import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminitrationScModule } from './adminitration-sc/adminitration-sc.module';
import { SidebarTeacherComponent } from './layout/sidebar-teacher/sidebar-teacher.component';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
import { DashboardTeacherModule } from './dashboard-teacher/dashboard-teacher.module';
import { SidebarAdminComponent } from './layout/sidebar-admin/sidebar-admin.component';
import { RouterModule } from '@angular/router'; // Agregar esta línea de importación
import { HttpClientModule } from '@angular/common/http';

import { ToastModule } from 'primeng/toast';
import { StudentContentModule } from './student-content/student-content.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarTeacherComponent,
    SidebarAdminComponent,


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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
