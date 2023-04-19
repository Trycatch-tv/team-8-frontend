import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent {
  emailControl: FormControl;
  emailForm: FormGroup;

  email:string='';
  contrasena:string='';

  constructor() {
    this.emailControl = new FormControl('', [Validators.required, this.emailValidator]);
    this.emailForm = new FormGroup({
      email: this.emailControl,
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
    //Se va enviarlos datos para la autenticacion
    alert('Haz iniciado sesion ' + this.contrasena + this.email);


    this.email='';
    this.contrasena='';

  }
}
