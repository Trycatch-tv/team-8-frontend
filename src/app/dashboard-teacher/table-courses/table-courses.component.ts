import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin/admin.service'
@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.css']
})
export class TableCoursesComponent implements OnInit {

  col:any;
  datos:any;

  constructor(private service_admin:AdminService){}
  ngOnInit(): void {
    this.service_admin.getlist_courses().subscribe((data:any) =>{
      //this.users = JSON.parse(data);
      this.datos = data;
      this.col = Object.keys(data[0]).slice(0,7)
    });

  }
}
