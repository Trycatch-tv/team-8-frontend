import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TableTeachersComponent } from './table-teachers/table-teachers.component';


const routes: Routes = [
{
  path:'dashboard-admin',
  component: HomeComponent,
  children: [
    {
      path:'content-courses',
      component: TableCoursesComponent
    },
    {
      path:'content-students',
      component: TableStudentsComponent
    },
    {
      path:'content-courses',
      component:TableCoursesComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
