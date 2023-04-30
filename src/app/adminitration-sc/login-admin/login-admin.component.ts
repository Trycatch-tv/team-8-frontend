import { Component } from '@angular/core';
import {  ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {



  constructor(private adminservice:AdminService,private toast:ToastrService,private router: Router, private auth:AuthService){}

  username:string='';
  password:string='';

  send_values(){

    const formdata = new FormData();
    formdata.append("username", this.username)
    formdata.append("password", this.password)


    this.adminservice.login_admin(formdata).subscribe((data:any)=>{
      AuthService.login();
      localStorage.setItem('username',data.username)
      this.router.navigate(['/dashboard-admin/home']);
    },
    (error)=>{
      this.toast.error("Contraseña O Correo No Valido");
    })
  }






}
