import { Component ,OnInit} from '@angular/core';
import { ErrorCourses } from '../type';
import { StudentcourseService } from 'src/app/services/api';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {
  datos!:any;
  error: ErrorCourses={
    message:'',
    isError:false
  }

  constructor(private studentcourse:StudentcourseService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const id_student = Number(localStorage.getItem('id'));

    this.studentcourse.getCursosPorEstudiante(id_student).subscribe((data:any)=>{
      this.datos = data["cursos"]
    },
    (error)=>{
      this.error = {message:`Ocurred an error` , isError:true};
    })

  }
}
