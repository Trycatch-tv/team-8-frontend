import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetComponent } from './password-reset/password-reset.component';

import { PasswordResetRountingModule } from './password-reset-routing.module';

@NgModule({
  declarations: [
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    PasswordResetRountingModule
  ]
})
export class PasswordResetModule { }
