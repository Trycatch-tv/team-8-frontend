import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationEmailService } from 'src/app/services/api/confirmation-email/confirmation-email.service';

@Component({
  selector: 'app-confirmation-home',
  templateUrl: './confirmation-home.component.html',
  styleUrls: ['./confirmation-home.component.css']
})
export class ConfirmationHomeComponent implements OnInit{

  showContentInform:boolean = true
  showContentCode:boolean = false
  disable_status_response:boolean = true

  code_user:string = '';
  codeFormGroup: FormGroup; // Utilizamos FormGroup en lugar de FormControl


  datosRecibidos:any = [];

  current_email:string="";

  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder,private generatecodeservice:ConfirmationEmailService){
    this.codeFormGroup = this.formBuilder.group({
      code: ['', [Validators.required, Validators.maxLength(6),Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const formDataString = decodeURIComponent(params['data']);

      try {
        this.datosRecibidos = JSON.parse(formDataString);
        console.log("Datos recibidos:", this.datosRecibidos);
        this.current_email = this.datosRecibidos.information_person.email;
        // Aquí puedes hacer lo que necesites con los datos recibidos
      } catch (error) {
        console.error("Error al analizar la cadena JSON:", error);
      }
    });

    this.generatecodeservice.generateCodeEmail(this.current_email).subscribe((data:any)=>{
      console.log(data)
      if(data.status !== "200")
      {
        this.disable_status_response=false;
      }

    })
  }

  NextContent(){
    this.showContentInform = false;
    this.showContentCode = true;

  }

  VerifyCode(){
    const valorCode = this.codeFormGroup!.get('code')!.value;
    this.generatecodeservice.verifyCodeEmail(this.current_email,valorCode).subscribe((data:any)=>{
      if(data.status == "200"){

      }
    })

  }
}
