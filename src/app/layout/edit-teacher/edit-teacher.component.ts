import { Component,OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/api';



@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {

  constructor(private teacherservice:TeacherService,private toastr: ToastrService,private route:ActivatedRoute,private router: Router){}




  id:any;
  name:string='';
  email:string='';
  phone:string='';
  area_especializacion='';
  password='';
  password_confirmation='';
  description:string='';
  estado:string='';
  datos:any=[];




  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async duerme() {
    console.log('Inicio');
    await this.sleep(3000);
    this.router.navigate(['/dashboard-admin/content-teachers']);
  }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.teacherservice.get_teacher_detail(this.id).subscribe((data:any)=>{
      ({nombre:this.name, correo:this.email,area_especializacion:this.area_especializacion,descripcion:this.description,telefono:this.phone, estado:this.estado,contrasena:this.password} = data)
      this.datos = data;
    },
    (error)=>{
      this.toastr.error(error)
    }
    )
  }


  send_values(){
    const formData = new FormData();
    formData.append("nombre",this.name);
    formData.append("correo",this.email);
    formData.append("area_especializacion",this.area_especializacion);
    formData.append("descripcion",this.description);
    formData.append("telefono",this.phone);
    formData.append("estado",this.estado);
    formData.append("contrasena",this.password);

    this.teacherservice.update_teacher(formData,this.id).subscribe((data:any)=>{
         this.showSuccess()
        this.duerme()
    },
    (error) => {
      this.toastr.error(error)
      // Aquí puede manejar cualquier error que haya ocurrido
    })

  }




    showSuccess() {
    for (let i = 3; i >= 1; i--) {
      setTimeout(() => {
        this.toastr.info(`Editado Correctamente, en ${i.toString()} segundos seras redirecionado`);
      }, (3 - i) * 1000);
    }
  }

}
