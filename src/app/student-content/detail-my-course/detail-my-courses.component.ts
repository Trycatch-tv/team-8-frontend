import { Component,OnInit } from '@angular/core';
import { StudentData } from '../type';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-my-courses',
  templateUrl: './detail-my-courses.component.html',
  styleUrls: ['./detail-my-courses.component.css']
})
export class DetailMyCourseComponent implements OnInit {
  constructor(private route: ActivatedRoute,private studentService: AdminService) { }
  courseDetail!:StudentData | undefined
  routeSub!:Subscription
  courseID!:string

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params)=>{
      this.courseID=params['id']
     })
  
     this.studentService.getlist_courses().subscribe((data:any) => {
      const courses = data as StudentData[]; // convierte los datos a un arreglo de StudentData
      this.courseDetail = courses.find((course: StudentData) => course.id.toString() === this.courseID.toString());
    });
  }
}
