import { Component ,OnInit} from '@angular/core';
import { ErrorCourses } from 'src/app/interface/courses/courses';
import { AdminService } from 'src/app/services/admin/admin.service';


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

  constructor(private adminservice:AdminService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const id_student = Number(localStorage.getItem('id'));

    this.adminservice.getCursosPorEstudiante(id_student).subscribe((data:any)=>{
      this.datos = data["cursos"]
    },
    (error)=>{
      this.error = {message:`Ocurred an error` , isError:true};
    })

  }
}
