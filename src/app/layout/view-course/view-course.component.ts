import { Component,OnInit } from '@angular/core';
import {AdminService} from '../../services/admin/admin.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit{


  constructor(private adminservice:AdminService , private route:ActivatedRoute,private router: Router, private toastr: ToastrService){}


  id:any;
  nombre:string='';
  categotia:string='';
  nivel:string='';
  codigo:string='';
  max:string='';
  valoracion:string='';
  estado:string='';
  descripcion:string='';

  datos:any=[];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    this.adminservice.get_course_detail(this.id).subscribe((data:any)=>{
      ({nombre:this.nombre, categoria:this.categotia,nivel_curso:this.nivel,codigo_curso:this.codigo,numero_max_estudiantes:this.max, valoraciones:this.valoracion,estado:this.estado,description:this.descripcion} = data)
      this.datos = data;
    },
    (error)=>{
      console.log(error)
    }
    )
  }

}
