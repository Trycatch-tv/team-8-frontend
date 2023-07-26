import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseService } from 'src/app/services/api/course/course.service';
import { TeacherService } from 'src/app/services/api/teacher/teacher.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent  {
  constructor(private courseservice:CourseService,private router: Router, private route: ActivatedRoute){}
  private routeSub!: Subscription;
  nombre:string= ""
  categoria:string= ""
  nivel_curso:string= ""
  numero_max_estudiantes:number= 0
  codigo_curso:string= ""
  estado:string= ""
  description:string= ""
  valoraciones:string='';
  id_estudiante:any= null
  id_profesor:any= null

  courseID:string=''

  handleSubmitUpdateCourse(e:Event){
    e.preventDefault()
    const data={
      nombre:this.nombre,
      categoria:this.categoria,
      nivel_curso:this.nivel_curso,
      numero_max_estudiantes:this.numero_max_estudiantes,
      codigo_curso:this.codigo_curso,
      estado:this.estado,
      description:this.description,
      valoraciones:this.valoraciones,
      id_estudiante:this.id_estudiante,
      id_profesor:this.id_profesor
    }


    this.courseservice.update_course(data,this.courseID).subscribe((data)=>{
      this.router.navigate(['/dashboard-teacher/content-courses'])
    })
  }
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params)=>{
      this.courseID=params['id']
     })

    this.courseservice.getOneCourse(this.courseID).subscribe((data:any)=>{
      this.nombre=data.nombre
      this.categoria=data.categoria
      this.nivel_curso=data.nivel_curso
      this.numero_max_estudiantes=data.numero_max_estudiantes
      this.codigo_curso=data.codigo_curso
      this.estado=data.estado
      this.description=data.description
      this.valoraciones = data.valoraciones
    })
  }
}
