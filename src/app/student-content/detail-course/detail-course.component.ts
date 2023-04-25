import { Component, OnInit } from '@angular/core';
import { StudentData } from '../type';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.css']
})
export class DetailCourseComponent implements OnInit {
  private routeSub!: Subscription;
  constructor(private route: ActivatedRoute,private studentService: StudentService) { }
  courseDetail!: StudentData | undefined
  courseID!:string

 ngOnInit(): void {
   this.routeSub = this.route.params.subscribe((params)=>{
    this.courseID=params['id']
   })

   this.studentService.getAllCourses().subscribe((data:any) => {
    const courses = data as StudentData[]; // convierte los datos a un arreglo de StudentData
    this.courseDetail = courses.find((course: StudentData) => course.id.toString() === this.courseID.toString());
  });
 }
 
}
