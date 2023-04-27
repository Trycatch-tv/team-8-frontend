import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent {

  constructor(private auth:AuthService, private router:Router){}

  logout(){
    AuthService.logout()
    this.router.navigate(['login/admin'])
  }




}
