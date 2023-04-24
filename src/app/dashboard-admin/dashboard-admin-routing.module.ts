import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TableTeachersComponent } from './table-teachers/table-teachers.component';
import { SidebarAdminComponent } from '../layout/sidebar-admin/sidebar-admin.component';

const routes: Routes = [
{
  path:'dashboard-admin/home',
  component: HomeComponent,
  children: [
    {
      path:'',
      component:SidebarAdminComponent
    },

  ]
},
{
  path:'dashboard-admin/content-students',
  component:TableStudentsComponent,
  children: [
    {
      path:'',
      component:SidebarAdminComponent
    },

  ]
},
{
  path:'dashboard-admin/content-courses',
  component:TableCoursesComponent,
  children: [
    {
      path:'',
      component:SidebarAdminComponent
    },

  ]
},
{
  path:'dashboard-admin/content-teachers',
  component:TableTeachersComponent,
  children: [
    {
      path:'',
      component:SidebarAdminComponent
    },

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
