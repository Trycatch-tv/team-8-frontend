import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TableCoursesComponent } from './table-courses/table-courses.component';
import { TableStudentsComponent } from './table-students/table-students.component';
import { TableTeachersComponent } from './table-teachers/table-teachers.component';
import { SidebarAdminComponent } from '../../layout/sidebar-admin/sidebar-admin.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AuthGuard } from '../../guards/auth/auth.guard';

const routes: Routes = [
{
  path:'dashboard-admin/home',
  component: HomeComponent,
  canActivate:[AuthGuard],
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
  canActivate:[AuthGuard],
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
  canActivate:[AuthGuard],
  children: [
    {
      path:'',
      component:SidebarAdminComponent
    },

  ]
},
{
  path:'dashboard-admin/content-teachers',
  canActivate:[AuthGuard],
  component:TableTeachersComponent,
  children: [
    {
      path:'',
      component:SidebarAdminComponent
    },

  ]
},
{
  path:'dashboard-admin/content-teachers/add',
  canActivate:[AuthGuard],
  component:AddTeacherComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
