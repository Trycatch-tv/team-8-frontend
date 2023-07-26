import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeachercourseService } from 'src/app/services/api';
import { CourseService } from 'src/app/services/api/course/course.service';
import { TeacherService } from 'src/app/services/api/teacher/teacher.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {


  constructor(private teacherService: TeacherService,private route:Router,private courseservice:CourseService,private toast:ToastrService, private courseteacherservive:TeachercourseService){}
  nombre:string= ""
  categoria:string= ""
  nivel_curso:string= ""
  numero_max_estudiantes:number= 0
  codigo_curso:string= ""
  estado:string= ""
  description:string= ""
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
      id_estudiante:this.id_estudiante,
      id_profesor:this.id_profesor

    }

    this.courseservice.add_course(data).subscribe((data_da:any)=>{
      this.route.navigate(['/dashboard-teacher/content-courses'])
      this.send_teacher_course(data_da.id)
    })
  }


   send_teacher_course(id_curso:any){

  const id_teacher = Number(localStorage.getItem('id_teacher'));
  this.courseteacherservive.agregarCursoProfesor(id_curso,id_teacher).subscribe((data:any)=>{
  },
  (error)=>{
    this.toast.error(error)
  })


 }

}
