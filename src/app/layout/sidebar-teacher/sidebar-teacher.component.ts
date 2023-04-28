import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth_teacher/auth.service';
@Component({
  selector: 'app-sidebar-teacher',
  templateUrl: './sidebar-teacher.component.html',
  styleUrls: ['./sidebar-teacher.component.css']
})
export class SidebarTeacherComponent {

  constructor(private router:Router){}
  logout_teacher(){
    AuthService.logout();
    this.router.navigate(['login/teacher'])
  }
}
