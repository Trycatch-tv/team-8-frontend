import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth_teacher/auth.service';
@Component({
  selector: 'app-sidebar-teacher',
  templateUrl: './sidebar-teacher.component.html',
  styleUrls: ['./sidebar-teacher.component.css']
})
export class SidebarTeacherComponent implements OnInit {

  email_teacher:any;
  constructor(private router:Router){}
  logout_teacher(){
    AuthService.logout();
    this.router.navigate(['login/teacher'])
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.email_teacher = localStorage.getItem('email_teacher');
  }





}
