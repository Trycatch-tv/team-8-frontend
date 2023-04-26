import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ]
})
export class AdminitrationScModule { }
