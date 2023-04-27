import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {
  constructor(private teacherService:TeacherService, private route: ActivatedRoute){}

  private routeSub!:Subscription
  nombre:string= ""
  categoria:string= ""
  nivel_curso:string= ""
  numero_max_estudiantes:number= 0
  codigo_curso:string= ""
  estado:string= ""
  description:string= ""
  valoraciones:number= 1
  id_estudiante:any= null
  id_profesor:any= null

  courseID:string=''



  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params)=>{
      this.courseID=params['id']
     })

    this.teacherService.getOneCourse(this.courseID).subscribe((data:any)=>{
      this.nombre=data.nombre
      this.categoria=data.categoria
      this.nivel_curso=data.nivel_curso
      this.numero_max_estudiantes=data.numero_max_estudiantes
      this.codigo_curso=data.codigo_curso
      this.estado=data.estado
      this.description=data.description

      console.log(data)
    })
  }
}
