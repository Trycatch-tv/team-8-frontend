import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationHomeComponent } from './confirmation-home/confirmation-home.component';

import { ConfirmationEmailRouting } from './confirmation-email-routing.module';

@NgModule({
  declarations: [
    ConfirmationHomeComponent
  ],
  imports: [
    CommonModule,
    ConfirmationEmailRouting
  ]
})
export class ConfirmationEmailModule { }
