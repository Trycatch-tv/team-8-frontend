import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {


  constructor(private teacherService: TeacherService,private route:Router){}
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

  handleSubmitAddCourse(e:Event){
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

    this.teacherService.add_course(data).subscribe((data)=>{
      this.route.navigate(['/dashboard-teacher/content-courses'])
    })
  }

}
