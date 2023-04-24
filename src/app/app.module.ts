import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminitrationScModule } from './adminitration-sc/adminitration-sc.module';
import { SidebarTeacherComponent } from './layout/sidebar-teacher/sidebar-teacher.component';
<<<<<<< HEAD
import { StudentContentModule } from './student-content/student-content.module';
=======
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
>>>>>>> cdf22e4b1a3edca84f743c3120af8275898a39a1

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
<<<<<<< HEAD
    StudentContentModule
=======
    DashboardAdminModule

>>>>>>> cdf22e4b1a3edca84f743c3120af8275898a39a1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
