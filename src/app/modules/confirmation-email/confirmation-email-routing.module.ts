import { Routes,RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { ConfirmationHomeComponent } from "./confirmation-home/confirmation-home.component";



const routes: Routes = [
    /*{
      path: 'student',
      component: HomeComponent,
      canActivate:[AuthGuard],
      children: [
        {
          path: 'courses',
          component: ContainerCourseComponent,
        },
        {
          path: 'my-courses',
          component: MyCoursesComponent
        },
        {
          path: 'detail-course/:id',
          component: DetailCourseComponent,
        },
        {
          path: 'detail-my-course/:id',
          component: DetailMyCourseComponent
        },
        {
          path: '',
          component: HomepageComponent
        }
      ]
    }*/
    {
      path:'account/email-confirmation',
      component:ConfirmationHomeComponent

    },
  ];

  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })

  export class ConfirmationEmailRouting{}
