import { Component ,OnInit} from '@angular/core';
import {AdminService} from '../../services/admin/admin.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {


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
}
