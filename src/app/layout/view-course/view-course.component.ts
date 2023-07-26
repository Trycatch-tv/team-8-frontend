import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/services/api/course/course.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit{


  constructor(private courseservice:CourseService , private route:ActivatedRoute,private router: Router, private toastr: ToastrService){}


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
    this.courseservice.get_course_detail(this.id).subscribe((data:any)=>{
      ({nombre:this.nombre, categoria:this.categotia,nivel_curso:this.nivel,codigo_curso:this.codigo,numero_max_estudiantes:this.max, valoraciones:this.valoracion,estado:this.estado,description:this.descripcion} = data)
      this.datos = data;
    },
    (error)=>{
      this.toastr.error(error)
    }
    )
  }

}
