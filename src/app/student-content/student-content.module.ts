import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailCourseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentContentModule { }
