import { Component, OnInit } from '@angular/core';
import { StudentData } from '../type';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/services/student/student.service';
import { AdminService } from 'src/app/services/admin/admin.service';
import { StudentcourseService } from 'src/app/services/relations/studentcourse/studentcourse.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute,private studentService: AdminService, private storage:LocalStorage) { }
  courseDetail!: StudentData | undefined
  courseID!:string


  id_student:any;

 ngOnInit(): void {
   this.routeSub = this.route.params.subscribe((params)=>{
    this.courseID=params['id']
   })

   this.studentService.getlist_courses().subscribe((data:any) => {
    const courses = data as StudentData[]; // convierte los datos a un arreglo de StudentData
    this.courseDetail = courses.find((course: StudentData) => course.id.toString() === this.courseID.toString());
  });




 }

 send_course(id_curso:any,id_teacher:any){

  const id_student = Number(localStorage.getItem('id'));
  alert(id_student)
  alert(id_curso)
  this.studentService.agregarCursoProfesorAEstudiante(id_curso,id_teacher,id_student).subscribe((data:any)=>{
    console.log(data)
  },
  (error)=>{
    console.log(error)
  })


 }


}
