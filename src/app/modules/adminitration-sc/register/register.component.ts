import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, Form, FormBuilder } from '@angular/forms';
import {StudentService} from '../../../services/student/student.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { AbstractControl } from '@angular/forms';
import { DepartmentsService } from 'src/app/services/api/departments/departments.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup;


  documentoPattern = /^[0-9]{7,10}$/;

  departaments:any =[];
  citys:any=[];
  constructor(private builder: FormBuilder,private departments:DepartmentsService,private route:Router) {
    this.miFormulario = this.builder.group({
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirm_password: ['', [Validators.required, this.passwordMatchValidator]],
    });
  }
  isLinear=true;

  phoneNumberPattern = /^[0-9]{10}$/;
  numeroPattern = /^[0-9]+$/;


  ngOnInit(): void {

    this.departments.getApiDepartaments().subscribe((data:any)=>{
        this.departaments = data;


    })
  }

  Empregister = this.builder.group({
    basic: this.builder.group({


    }),
    doc: this.builder.group({
      fileControl: this.builder.control('',[this.fileSizeValidator,Validators.required]),
      tipo_documento:this.builder.control('',Validators.required),
      num_documento:this.builder.control('',[Validators.pattern(this.numeroPattern),Validators.required,this.documentoValidator]),

    }),
    information_person: this.builder.group({
      fullName:this.builder.control('',Validators.required),
      email:this.builder.control('',[Validators.required,Validators.email]),
      phone:this.builder.control('',[Validators.required, Validators.pattern(this.phoneNumberPattern)]),
      departments: this.builder.control('',Validators.required)
    }),

    password_end: this.builder.group({
      password:this.builder.control('',[Validators.required,Validators.minLength(3)]),
      confirm_password:this.builder.control('',[Validators.required,this.passwordMatchValidator]),
    }),
  });

  // Agregar la validación personalizada solo al campo numeroDocumento


  getFileNameFromPath(path: string): string {
    const startIndex = path.lastIndexOf('\\') + 1;
    return path.slice(startIndex);
  }




  get Basicform(){
    return this.Empregister.get("basic") as FormGroup;
  }
  get documentacionForm(){
    return this.Empregister.get("doc") as FormGroup;
  }
  get informationPersonForm(){
    return this.Empregister.get("information_person") as FormGroup;
  }

  get passwordEndForm(){
    return this.Empregister.get("password_end") as FormGroup;
  }
  HandleSubmit(){
    if(this.Empregister.valid){
      console.log(this.Empregister.value);
    }
  }


  //Validar password iguales
  passwordMatchValidator(control: AbstractControl) {
      const passwordControl = control.parent?.get('password');
      const password = passwordControl?.value;
      const confirm_password = control.value;

      if (password !== confirm_password) {
        return { passwordMismatch: true };
      }

      return null;
    }



   // Validación personalizada para el tamaño máximo del archivo
   fileSizeValidator(control: AbstractControl): { [key: string]: any } | null {
    const maxSizeInBytes = 1024 * 1024; // 1 MB
    const allowedExtensions = ['pdf']; // Array de extensiones permitidas (puedes agregar más extensiones si lo deseas)
    const file = control.value;


    const startIndex = file.lastIndexOf('\\') + 1;
    const filename = file.slice(startIndex);
    //console.log(fileName)


    if (!filename){
      //alert("Archivo Invalido");
      return { 'invalidFile': true };
    }

    const extension = file.split('.').pop()?.toLowerCase() || ''; // Valor predeterminado: cadena vacía si extension es indefinido
    // Validar tamaño máximo
    if (file.size > maxSizeInBytes ) {
      //alert("Archivo Muy Pesado");
      return { 'fileSizeExceeded': true };

    }

    // Validar extensión (solo permitir PDF)
    if (!allowedExtensions.includes(extension)) {
      //alert("Extension invalida es .pdf")
      return { 'invalidFileExtension': true };
    }
    return null; // Si no se encontraron problemas de validación, consideramos el archivo como válido
  }


  documentoValidator(control: AbstractControl) {
    const cedulaPattern = /^[0-9]{7}$/;

    // Define la expresión regular para el número de tarjeta de identidad (acepta exactamente 10 dígitos numéricos)
    const tarjetaIdentidadPattern = /^[0-9]{10}$/;

    // Función de validación personalizada para el número de documento
    const numeroDocumento = control.value;
    const tipoDocumento = control.parent?.get('tipo_documento')?.value; // Usamos '?' para manejar el posible valor nulo

    // Verificar si el número de documento coincide con la expresión regular correspondiente
    if (tipoDocumento === 'TI' && !tarjetaIdentidadPattern.test(numeroDocumento)) {
      return { invalidTarjetaIdentidad: true };
    }

    if (tipoDocumento === 'CD' && !cedulaPattern.test(numeroDocumento)) {
      return { invalidCedula: true };
    }

    return null;
  }




  onSubmit(){
    if (this.Empregister.valid) {
      const formData = this.Empregister.value;
      console.log(formData);
      this.route.navigate(['/']);
      this.Empregister.reset();
      // Aquí puedes realizar las acciones que necesites con los datos del formulario.
      // Por ejemplo, enviar los datos al backend o mostrarlos en una alerta.
    } else {
      // Si el formulario no es válido, puedes mostrar algún mensaje o realizar otras acciones.
    }
  }



  /*
  emailForm: FormGroup;
  emailControl: FormControl;
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
    //campos requeridos
    this.emailControl = new FormControl('', [Validators.required, this.emailValidator]);
    this.nameControl = new FormControl('',[Validators.required,this.nameValidator]);
    this.passwordControl = new FormControl('',[Validators.required,this.passwordValidator]);
    this.RepeatControl = new FormControl('',[Validators.required,this.RepeatPasswordValidator]);

    this.countryControl = new FormControl('',Validators.required);
    this.estadoControl = new FormControl('',Validators.required);
    this.phoneControl = new FormControl('',Validators.required);
    ///////////////////

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
  /// validaciones de campos de register/////////
  repeatPasswordValidate:boolean = true

  emailValidator(control: FormControl): { [s: string]: boolean,} {
    if(control.value){
      if (control.value.length > 3) {
        if (!control.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
          return { invalidEmail: true};
        }
      }else{
        return {invalidEmail: true}
      }
    }
    else return {fieldRequired: true}

    return {};
  }
  nameValidator(control: FormControl): { [s: string]: boolean } {
    if(!control.value){
      return {invalidName: true };
    }

    return {};
  }
  passwordValidator(control: FormControl): { [s: string]: boolean } {
    const MAX_CARACTER=3
    if(control.value){
     if(control.value.length < MAX_CARACTER ) return {invalidPassword:true}
    }else return  {fieldRequired:true}

    return {};
  }
  RepeatPasswordValidator(control: FormControl): { [s: string]: boolean } {
   if(!control.value) return {fieldRequired:true}
   return {};
  }

  passwordsMatch(){
    this.password = this.passwordControl.value
    this.password_repeat =this.RepeatControl.value
    if(this.RepeatControl.value === this.passwordControl.value){
      this.repeatPasswordValidate=false
    }
    else this.repeatPasswordValidate=true
    console.log(this.emailForm.invalid)
  }
///////////////////////////////////////////////
 handleSubmitFormLogin(event: Event) {
    event.preventDefault();
    //alert(`${this.nameControl.value} ${this.emailControl.value} ${this.estadoControl.value} ${this.countryControl.value} ${this.phoneControl.value} ${this.passwordControl.value} ${this.RepeatControl.value}`)

    //Se va enviarlos datos para la autenticacion

    const formdata = new FormData()
    formdata.append("nombre", this.nameControl.value)
    formdata.append("correo", this.emailControl.value)
    formdata.append("ciudad", this.countryControl.value)
    formdata.append("telefono", this.phoneControl.value)
    formdata.append("estado", this.estadoControl.value)
    formdata.append("contrasena", this.passwordControl.value)
    formdata.append("rol",this.rol)



    //console.log(formdata)




    this.studentservice.add_student(formdata).subscribe((data:any)=>{
      console.log(data)
      this.toast.success("Registro Enviado Correctamente")
      this.router.navigate(['/login'])

    },
    (error:any)=>{
        this.toast.error("El registro no se completo correctamente")
    })


    this.passwordControl.reset();
    this.emailControl.reset();

  }*/
}








