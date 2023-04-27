import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { SidebarTeacherComponent } from '../layout/sidebar-teacher/sidebar-teacher.component';
import { combineLatest } from 'rxjs';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { DetailCourseComponent } from './detail-course/detail-course.component';


const routes: Routes = [
{
  path:'dashboard-teacher/home',
  component: HomeComponent,
  children: [
    {
      path:'',
      component:SidebarTeacherComponent
    },

  ]
}
,
{
  path:'dashboard-teacher/content-students',
  component:TableStudentsComponent,
  children: [
    {
      path:'',
      component:SidebarTeacherComponent
    },

  ]
},
{
  path:'dashboard-teacher/content-courses',
  component:TableCoursesComponent,
  children: [
    {
      path:'',
      component:SidebarTeacherComponent
    },

  ]
},
{
  path:'dashboard-teacher/content-courses/add',
  component:AddCourseComponent,
},
{
  path:'dashboard-teacher/content-courses/update/:id',
  component:UpdateCourseComponent,
},
{
  path:'dashboard-teacher/content-courses/detail-course/:id',
  component:DetailCourseComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardTeacherRoutingModule { }
