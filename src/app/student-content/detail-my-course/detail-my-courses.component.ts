import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Subscription } from 'rxjs';
import { CourseInterface } from 'src/app/interface/courses/courses';

@Component({
  selector: 'app-detail-my-courses',
  templateUrl: './detail-my-courses.component.html',
  styleUrls: ['./detail-my-courses.component.css']
})
export class DetailMyCourseComponent implements OnInit {
  constructor(private route: ActivatedRoute,private studentService: AdminService) { }
  courseDetail!:CourseInterface | undefined
  routeSub!:Subscription
  courseID!:string

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params)=>{
      this.courseID=params['id']
     })
  
     this.studentService.getlist_courses().subscribe((data:any) => {
      const courses = data as CourseInterface[]; // convierte los datos a un arreglo de CourseInterface
      this.courseDetail = courses.find((course: CourseInterface) => course.id.toString() === this.courseID.toString());
    });
  }
}
