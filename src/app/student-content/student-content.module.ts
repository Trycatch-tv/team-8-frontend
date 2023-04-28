import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { ContainerCourseComponent } from './container-course/container-course.component';
import { CardCourseComponent } from './card-course/card-course.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { DetailMyCourseComponent } from './detail-my-course/detail-my-courses.component';
import { StudentService } from '../services/student/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentContentRoutingModule } from './student-content-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    DetailCourseComponent,
    ContainerCourseComponent,
    CardCourseComponent,
    NavBarComponent,
    HomepageComponent,
    MyCoursesComponent,
    DetailMyCourseComponent,

  ],
  providers: [
    StudentService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StudentContentRoutingModule,
  ]
})
export class StudentContentModule { }
