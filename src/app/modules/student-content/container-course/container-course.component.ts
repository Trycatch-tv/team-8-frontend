import { Component, OnInit } from '@angular/core';
import { CourseInterface, ErrorCourses } from 'src/app/interface/courses/courses';
import { CourseService } from 'src/app/services/api/course/course.service';
@Component({
  selector: 'app-container-course',
  templateUrl: './container-course.component.html',
  styleUrls: ['./container-course.component.css']
})
export class ContainerCourseComponent implements OnInit {
  inputSearchValue: string = ''
  constructor(private courseservice: CourseService) { }
  coursesAll!: Array<CourseInterface>
  courses!: Array<CourseInterface>
  error: ErrorCourses={
    message:'',
    isError:false
  }


  ngOnInit() {
    this.courseservice.getlist_courses().subscribe((data:any)=>{
      this.courses = data
      this.coursesAll= data;
    },
    (error)=>{
      this.error = {message:`Ocurred an error` , isError:true};
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



