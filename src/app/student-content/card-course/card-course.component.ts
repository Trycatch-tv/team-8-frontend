import { Component, Input } from '@angular/core';
import { StudentData } from '../type';

@Component({
  selector: 'app-card-course',
  templateUrl: './card-course.component.html',
  styleUrls: ['./card-course.component.css']
})
export class CardCourseComponent {
   @Input() route:string=''
   @Input() data!:StudentData
}
