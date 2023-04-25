import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { StudentData } from '../type';
@Component({
  selector: 'app-container-course',
  templateUrl: './container-course.component.html',
  styleUrls: ['./container-course.component.css']
})
export class ContainerCourseComponent implements OnInit {
  inputSearchValue: string = ''
  constructor(private studentService: StudentService) { }
  coursesAll!: Array<StudentData>
  courses!: Array<StudentData>


  ngOnInit() {
    this.studentService.getAllCourses().subscribe((data: any) => {
      this.courses = data
      this.coursesAll = data
    });
  }
  handleSearch() {
    if (!this.inputSearchValue) {
      this.courses = this.coursesAll;
      return;
    }
  
    this.courses=this.coursesAll.filter(item => (
      item.nombre.toLowerCase().includes(this.inputSearchValue.toLowerCase())
    ));
  }

}



