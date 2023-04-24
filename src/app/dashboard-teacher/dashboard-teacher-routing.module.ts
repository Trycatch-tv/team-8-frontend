import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { SidebarTeacherComponent } from '../layout/sidebar-teacher/sidebar-teacher.component';
import { combineLatest } from 'rxjs';


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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardTeacherRoutingModule { }
