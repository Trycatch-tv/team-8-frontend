import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth_student/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeMenu:boolean=false

  handleActiveMenu=()=>this.activeMenu=!this.activeMenu


  constructor(private router:Router){}
  logout_(){
    console.log(AuthService.logout())
    console.log("sadsddd")
    AuthService.logout();
    this.router.navigate(['/login'])
  }
}
