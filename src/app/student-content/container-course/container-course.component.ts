import { Component, OnInit } from '@angular/core';
import { ErrorCourses, StudentData } from '../type';
import { catchError, throwError } from 'rxjs';
import { AdminService } from 'src/app/services/admin/admin.service';
@Component({
  selector: 'app-container-course',
  templateUrl: './container-course.component.html',
  styleUrls: ['./container-course.component.css']
})
export class ContainerCourseComponent implements OnInit {
  inputSearchValue: string = ''
  constructor(private studentService: AdminService) { }
  coursesAll!: Array<StudentData>
  courses!: Array<StudentData>
  error: ErrorCourses={
    message:'',
    isError:false
  }


  ngOnInit() {
    this.studentService.getlist_courses().subscribe((data:any)=>{
      this.courses = data
      this.coursesAll= data;
      console.log(data)
    },
    (error)=>{
      console.log(error)
      this.error = {message:'not loading the data', isError:true};
    })
  }
  handleSearch() {
    if (!this.inputSearchValue) {
      this.courses = this.coursesAll;
      return
    }

    this.courses = this.coursesAll.filter(item => (
      item.nombre.toLowerCase().includes(this.inputSearchValue.toLowerCase())
    ))
  }

}



