import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth_student/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  activeMenu:boolean=false
  email:string | null=''

  handleActiveMenu=()=>this.activeMenu=!this.activeMenu


  constructor(private router:Router){}
  logout_(){
    AuthService.logout();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
    this.email= localStorage.getItem('email')
  }
}
