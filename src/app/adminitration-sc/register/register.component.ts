import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailControl: FormControl;
  emailForm: FormGroup;
  passwordControl:FormControl;

  email:string='';
  password:string='';
  selectedCity:string='';
  cities = [
    { label: 'Colombia', value: 'Colombia' },
    { label: 'Estados Unidos', value: 'EEUU' },
    { label: 'España', value: 'España' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'Perú', value: 'Peru' },
    { label: 'Canadá', value: 'Canada' },
    { label: 'Inglaterra', value: 'Inglaterra' },
    { label: 'Italia', value: 'Italia' },
    { label: 'Venezuela', value: 'Venezuela' },
    { label: 'Chile', value: 'Chile' },
    { label: 'Panamá', value: 'Panama' }
  ];
  name:string='';
  phone:string='';
  



  constructor() {
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
    //Se va enviarlos datos para la autenticacion

    this.passwordControl.reset();
    this.emailControl.reset();

  }
}



  




