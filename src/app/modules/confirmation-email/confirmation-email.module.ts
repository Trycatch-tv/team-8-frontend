import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationHomeComponent } from './confirmation-home/confirmation-home.component';

import { ConfirmationEmailRouting } from './confirmation-email-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule

@NgModule({
  declarations: [
    ConfirmationHomeComponent
  ],
  imports: [
    CommonModule,
    ConfirmationEmailRouting,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConfirmationEmailModule { }
