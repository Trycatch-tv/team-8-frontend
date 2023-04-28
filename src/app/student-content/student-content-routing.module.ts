import { Routes,RouterModule } from "@angular/router";
import { ContainerCourseComponent } from "./container-course/container-course.component";
import { DetailCourseComponent } from "./detail-course/detail-course.component";
import { DetailMyCourseComponent } from "./detail-my-course/detail-my-courses.component";
import { HomeComponent } from "./home/home.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { MyCoursesComponent } from "./my-courses/my-courses.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../guards/auth_student/auth.guard";



const routes: Routes = [
    {
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
        },
      ]
    }
  ];

  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })

  export class StudentContentRoutingModule{}
