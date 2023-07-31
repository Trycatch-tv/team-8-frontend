import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/api/auth/auth_student/auth.service';
import { StudentcourseService } from 'src/app/services/api/relations/studentcourse/studentcourse.service';
import { StudentService } from 'src/app/services/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent {
  emailControl: FormControl;
  emailForm: FormGroup;
  passwordControl:FormControl;

  email:string='';
  password:string='';


constructor(private router:Router, private toast:ToastrService, private studenservice:StudentService) {
    this.passwordControl = new FormControl('');
    this.emailControl = new FormControl('', [Validators.required, this.emailValidator]);
    this.emailForm = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
    });
  }


  emailValidator(control: FormControl): { [s: string]: boolean } {

    if (control.value.length > 3) {
      if (!control.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
        return { invalidEmail: true };
      }
    }

    return {};
  }

  handleSubmitFormLogin(event: Event) {
    event.preventDefault();

    const formdata = new FormData()
    formdata.append("correo",this.emailControl.value)
    console.log(this.emailControl.value)
    formdata.append("contrasena", this.passwordControl.value)
    //Se va enviarlos datos para la autenticacion
    this.studenservice.login_student(formdata).subscribe((data:any)=>{
      AuthService.login();
      StudentcourseService.data_login(data.id,data.nombre,data.correo)
      this.toast.success("Inicio de seccion correctamente")
      this.router.navigate(['/student']);
    },
    (error)=>{
      this.toast.error("Usuario o contraseña no valido");
    })

    this.passwordControl.reset();
    this.emailControl.reset();

  }
}
