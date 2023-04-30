import { Component ,OnInit} from '@angular/core';
import {AdminService} from '../../services/admin/admin.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {

  constructor(private adminservice:AdminService , private route:ActivatedRoute,private router: Router, private toastr: ToastrService){}



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


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.adminservice.get_teacher_detail(this.id).subscribe((data:any)=>{
      ({nombre:this.name, correo:this.email,area_especializacion:this.area_especializacion,descripcion:this.description,telefono:this.phone, estado:this.estado,contrasena:this.password} = data)
      this.datos = data;
    },
    (error)=>{
      this.toastr.error(error)
    }
    )
  }
}
