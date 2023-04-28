import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, Form } from '@angular/forms';
import {StudentService} from '../../services/student/student.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailControl: FormControl;
  emailForm: FormGroup;
  passwordControl:FormControl;
  nameControl:FormControl;
  phoneControl:FormControl;
  RepeatControl:FormControl;
  countryControl:FormControl;
  estadoControl:FormControl;



  email:string='';
  password:string='';
  selectedCity:string='';
  name:string='';
  phone:string='';
  estado:string='';
  password_repeat:string='';
  rol='student';

  country = [
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




  constructor(private studentservice:StudentService, private router:Router,private toast:ToastrService) {
    this.passwordControl = new FormControl('');
    this.nameControl = new FormControl('');
    this.countryControl = new FormControl('');
    this.estadoControl = new FormControl('');
    this.phoneControl = new FormControl('');
    this.RepeatControl = new FormControl('');
    this.emailControl = new FormControl('', [Validators.required, this.emailValidator]);
    this.emailForm = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
      name:this.nameControl,
      phone:this.phoneControl,
      password_repeat:this.RepeatControl,
      selectedCity:this.countryControl,
      estado:this.estadoControl
    });
  }


  emailValidator(control: FormControl): { [s: string]: boolean } {

    if(control.value){
      if (control.value.length > 3) {
        if (!control.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
          return { invalidEmail: true };
        }
      }
    }

    return {};
  }


  passwordsMatch(){
    this.password = this.passwordControl.value
    this.password_repeat =this.RepeatControl.value

    return  this.password.trim().length > 3  && this.password_repeat.trim().length > 3  && this.RepeatControl.value === this.passwordControl.value
  }

  handleSubmitFormLogin(event: Event) {
    event.preventDefault();
    alert(`${this.nameControl.value} ${this.emailControl.value} ${this.estadoControl.value} ${this.countryControl.value} ${this.phoneControl.value} ${this.passwordControl.value} ${this.RepeatControl.value}`)
    //Se va enviarlos datos para la autenticacion


    const formdata = new FormData()
    formdata.append("nombre", this.nameControl.value)
    formdata.append("correo", this.emailControl.value)
    formdata.append("ciudad", this.countryControl.value)
    formdata.append("telefono", this.phoneControl.value)
    formdata.append("estado", this.estadoControl.value)
    formdata.append("contrasena", this.passwordControl.value)
    formdata.append("rol",this.rol)
    //formdata.append("cursos","[]")
    //formdata.append("profesores","[]")


    console.log(formdata)



    this.studentservice.add_student(formdata).subscribe((data:any)=>{
      console.log(data)
      this.toast.success("Registro Enviado Correctamente")
      this.router.navigate(['/login'])

    },
    (error)=>{
        this.toast.error("El registro no se completo correctamente")
        console.log(error)
    })


    this.passwordControl.reset();
    this.emailControl.reset();

  }
}








