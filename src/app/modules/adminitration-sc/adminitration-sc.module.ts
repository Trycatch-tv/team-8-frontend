import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginTeacherComponent } from './login-teacher/login-teacher.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { ModalHomeComponent } from './modal-home/modal-home.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginAdminComponent,
    LoginTeacherComponent,
    HeaderHomeComponent,
    ModalHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),

  ]
})
export class AdminitrationScModule { }
