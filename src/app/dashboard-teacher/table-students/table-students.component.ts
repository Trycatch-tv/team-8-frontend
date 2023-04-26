import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin/admin.service';

import {User} from '../../interface/students/students';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {


  constructor(private service_admin:AdminService){}

  users:User[] =[];
  col:any;
  datos:any;


  ngOnInit(): void {
    this.service_admin.getlist_students().subscribe((data:any) =>{
      //this.users = JSON.parse(data);
      this.datos = data;
      this.col = Object.keys(data[0]).slice(0,7)
    });

  }
}
