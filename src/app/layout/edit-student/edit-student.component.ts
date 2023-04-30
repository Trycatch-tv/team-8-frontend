import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin/admin.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent  implements OnInit{
  constructor(private adminservice:AdminService , private route:ActivatedRoute,private router: Router, private toastr: ToastrService){}

  id:any;
  name:string='';
  phone:string='';
  email:string='';
  ciudad:string='';
  password_confirmation='';
  password='';
  estado='';
  datos:any=[];





  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.adminservice.get_student_detail(this.id).subscribe((data:any)=>{
      ({nombre:this.name, correo:this.email,ciudad:this.ciudad,telefono:this.phone, estado:this.estado,contrasena:this.password} = data)
      this.datos = data;
    },
    (error)=>{
      this.toastr.error(error)
    }
    )
  }


  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async duerme() {
    await this.sleep(3000);
    this.router.navigate(['/dashboard-admin/content-students']);
  }


  send_values(){
    const formdata = new FormData()
    formdata.append("nombre",this.name)
    formdata.append("correo",this.email)
    formdata.append("ciudad",this.ciudad)
    formdata.append("telefono",this.phone)
    if(this.password === this.password_confirmation && this.password && this.password_confirmation)
    {
      formdata.append("contrasena", this.password)
    }
    formdata.append("estado", this.estado)

    this.adminservice.update_student(formdata,this.id).subscribe((data:any)=>{
      this.showSuccess()
      this.duerme()
    },
    (error)=>{
      this.toastr.error(error)
    })
  }



  showSuccess() {
    for (let i = 3; i >= 1; i--) {
      setTimeout(() => {
        this.toastr.info(`Editado Correctamente en ${i.toString()} segundos seras redirecionado`);
      }, (3 - i) * 1000);
    }
  }


}
