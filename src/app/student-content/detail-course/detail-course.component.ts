import { Component, OnInit } from '@angular/core';
import { StudentData } from '../type';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute,private router:Router,private studentService: AdminService) { }
  courseDetail!: StudentData | undefined
  courseID!:string
  isSuscribed:boolean=false
  id_student:any;

 ngOnInit(): void {
   this.routeSub = this.route.params.subscribe((params)=>{
    this.courseID=params['id']
   })

   this.studentService.getlist_courses().subscribe((data:any) => {
    const courses = data as StudentData[]; // convierte los datos a un arreglo de StudentData
    this.courseDetail = courses.find((course: StudentData) => course.id.toString() === this.courseID.toString())
    const idsStudents:any=this.courseDetail?.estudiantes

    if (idsStudents !== null && idsStudents !==  undefined && localStorage.getItem('id') !== null) {
      const isEnrolled= idsStudents.includes(Number(localStorage.getItem('id')));
      if(isEnrolled)this.isSuscribed= true
    }
    
    
   });

}

 send_course(id_curso:any,id_teacher:any){

  const id_student = Number(localStorage.getItem('id'));
  this.studentService.agregarCursoProfesorAEstudiante(id_curso,id_teacher,id_student).subscribe((data:any)=>{
    alert('Te has suscrito correctamente')
    this.router.navigate(['/student/my-courses'])
  },
  (error)=>{
    alert('ocurrio un error')
    console.log(error)
  })


 }


}
