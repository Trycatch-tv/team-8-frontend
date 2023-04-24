import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminitrationScModule } from './adminitration-sc/adminitration-sc.module';
import { SidebarTeacherComponent } from './layout/sidebar-teacher/sidebar-teacher.component';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarTeacherComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AdminitrationScModule,
    DashboardAdminModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
