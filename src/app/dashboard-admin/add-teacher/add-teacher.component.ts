import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin/admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private adminservice:AdminService,private toastr: ToastrService,private route:ActivatedRoute,private router: Router){}


  name:string='';
  email:string='';
  phone:string='';
  area_especializacion='';
  password='';
  password_confirmation='';
  description:string='';
  estado:string='';
  rol:string='teacher'

  ngOnInit(): void {
  }


  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async duerme() {
    console.log('Inicio');
    await this.sleep(3000);
    this.router.navigate(['/dashboard-admin/content-teachers']);
  }

  send_values(){

    console.log(this.name)
    const formData = new FormData();
    formData.append("nombre",this.name);
    formData.append("correo",this.email);
    formData.append("area_especializacion",this.area_especializacion);
    formData.append("descripcion",this.description);
    formData.append("telefono",this.phone);
    formData.append("estado",this.estado);
    formData.append("contrasena",this.password);
    formData.append("rol",this.rol)
    return this.adminservice.add_teacher(formData).subscribe((data:any)=>{
        console.log(data)
         this.showSuccess()
        this.duerme()
    },
    (error) => {
      console.log('Error during POST request', error);
      // Aquí puede manejar cualquier error que haya ocurrido
    })

  }


  showSuccess() {
    for (let i = 3; i >= 1; i--) {
      setTimeout(() => {
        this.toastr.success(`Añadido Correctamente, en ${i.toString()} segundos seras redirecionado`);
      }, (3 - i) * 1000);
    }
  }






}
