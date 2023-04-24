import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminitrationScModule } from './adminitration-sc/adminitration-sc.module';
import { SidebarTeacherComponent } from './layout/sidebar-teacher/sidebar-teacher.component';
import { StudentContentModule } from './student-content/student-content.module';

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
    StudentContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
