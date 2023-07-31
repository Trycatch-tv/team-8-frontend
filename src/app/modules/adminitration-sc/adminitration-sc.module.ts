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
import { HeroComponent } from './hero/hero.component';
import { NavigationCategoriesComponent } from './navigationCategories/navigationCategories.component';
import { LearningComponent } from './learning/learning.component';
import { BannerHomeComponent } from './bannerHome/bannerHome.component';
import { CardNotificationComponent } from './cardNotification/cardNotification.component';
import { CardsDevsComponent } from './cardsDevs/cardsDevs.component';
import { CardCommentsComponent } from './cardComments/cardComments.component';
import { BtnDocumentationComponent } from './btnDocumentation/btnDocumentation.component';
import { CreatorsAtTeacherComponent } from './creatorsAtTeacher/creatorsAtTeacher.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { ModalHomeComponent } from './modal-home/modal-home.component';

import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon'; // Importa el módulo de iconos
import { MatStepperModule } from '@angular/material/stepper'; // Asegúrate de importar el módulo del stepper u otros módulos que necesites
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa el módulo que contiene mat-form-field y otros módulos que desees utilizar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginAdminComponent,
    LoginTeacherComponent,
    HeroComponent,
    NavigationCategoriesComponent,
    LearningComponent,
    BannerHomeComponent,
    CardNotificationComponent,
    CardsDevsComponent,
    CardCommentsComponent,
    BtnDocumentationComponent,
    CreatorsAtTeacherComponent,
    HeaderHomeComponent,
    ModalHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    BrowserAnimationsModule,


  ]
})
export class AdminitrationScModule { }
