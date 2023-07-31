import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CourseInterface } from 'src/app/interface/courses/courses';
import { CoursestudenteacherService } from 'src/app/services/api/relations/coursestudenteacher/coursestudenteacher.service';
import { CourseService } from 'src/app/services/api/course/course.service';



@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute,private router:Router,private courseservices: CourseService, private toast:ToastrService,private courseteacherstudent:CoursestudenteacherService) { }
  courseDetail!: CourseInterface | undefined
  courseID!:string
  isSuscribed:boolean=false
  id_student:any;


 ngOnInit(): void {
   this.routeSub = this.route.params.subscribe((params)=>{
    this.courseID=params['id']
   })

   this.courseservices.getlist_courses().subscribe((data:any) => {
    const courses = data as CourseInterface[]; // convierte los datos a un arreglo de CourseInterface
    this.courseDetail = courses.find((course: CourseInterface) => course.id.toString() === this.courseID.toString())
    const idsStudents:any=this.courseDetail?.estudiantes

    if (idsStudents !== null && idsStudents !==  undefined && localStorage.getItem('id') !== null) {
      const isEnrolled= idsStudents.includes(Number(localStorage.getItem('id')));
      if(isEnrolled)this.isSuscribed= true
    }


   });

}

 send_course(id_curso:any,id_teacher:any){

  const id_student = Number(localStorage.getItem('id'));
  this.courseteacherstudent.agregarCursoProfesorAEstudiante(id_curso,id_teacher,id_student).subscribe((data:any)=>{
    this.toast.success('Te has suscrito correctamente')
    this.router.navigate(['/student/my-courses'])
  },
  (error)=>{
    this.toast.error('ocurrio un error')
  })


 }


}
