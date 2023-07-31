import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth/auth_teacher/auth.service';

import { TeachercourseService } from 'src/app/services/api/relations/teachercourse/teachercourse.service';
import { TeacherService } from 'src/app/services/api';
@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private router:Router, private toast:ToastrService,private teacherservice:TeacherService){}
  email:string='';
  password:string='';


  handleSubmitFormLogin(event: Event) {
    event.preventDefault();

    const formdata = new FormData()
    formdata.append("correo",this.email)
    formdata.append("contrasena", this.password)
    //Se va enviarlos datos para la autenticacion
    this.teacherservice.login_teacher(formdata).subscribe((data:any)=>{
      AuthService.login();
      TeachercourseService.data_login(data.id,data.nombre,data.correo)
      this.router.navigate(['/dashboard-teacher/home']);
    },
    (error)=>{
      this.toast.error("Usuario o contraseña no valido");
    })

  }


}
