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
import { AuthGuard } from '../guards/auth_teacher/auth.guard';
import { ViewStudentComponent } from './view-student/view-student.component';


const routes: Routes = [
{
  path:'dashboard-teacher/home',
  component: HomeComponent,
  canActivate:[AuthGuard],
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
  canActivate:[AuthGuard],
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
  canActivate:[AuthGuard],

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
  canActivate:[AuthGuard],

},
{
  path:'dashboard-teacher/content-courses/update/:id',
  component:UpdateCourseComponent,
  canActivate:[AuthGuard],

},
{
  path:'dashboard-teacher/content-courses/detail-course/:id',
  component:DetailCourseComponent,
  canActivate:[AuthGuard],

},
{
  path:'dashboard-teacher/detail-student/:id',
  component:ViewStudentComponent,
  canActivate:[AuthGuard],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardTeacherRoutingModule { }
