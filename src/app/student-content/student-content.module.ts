import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';
import { ContainerCourseComponent } from './container-course/container-course.component';
import { CardCourseComponent } from './card-course/card-course.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'student',
    component: HomeComponent,
    children:[
      {
        path:'courses',
        component:ContainerCourseComponent
      },
      {
      path:'detail-course/:id',
      component:DetailCourseComponent
    },
     
    {
      path:'',
      component:HomepageComponent
    },
  ]
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    DetailCourseComponent,
    ContainerCourseComponent,
    CardCourseComponent,
    NavBarComponent,
    HomepageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ]
})
export class StudentContentModule { }
