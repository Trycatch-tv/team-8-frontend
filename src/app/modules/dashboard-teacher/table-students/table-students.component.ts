import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service';

import {User} from '../../../interface/students/students';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {


  constructor(private service_admin:AdminService,private messageService:MessageService){}

  users:User[] =[];
  col:any;
  datos:any;
  itemId: any;
  showModal = false;

  ngOnInit(): void {
    const id_profesor = Number(localStorage.getItem('id_teacher'));
    this.service_admin.getEstudiantesPorProfesor(id_profesor).subscribe((data:any) =>{
      //this.users = JSON.parse(data);
      this.datos = data["students"]
      //this.col = Object.keys(data[0]).slice(0,7)
    });

  }
  showConfirm1(id: any) {
    this.messageService.add({key: 'confirm', sticky: true, severity:'warn', summary:'Estas Seguro?', detail:'Desea elimina este estudiante'});
    this.itemId = id;
  }

  onConfirm1() {
    this.messageService.clear('confirm');
    this.service_admin.deleteStudent(this.itemId).subscribe((data:any)=>{
    })

    // aquí puedes agregar la lógica que se ejecutará cuando el usuario haga clic en el botón "Yes"
  }

  onReject1() {
    this.messageService.clear('confirm');

    // aquí puedes agregar la lógica que se ejecutará cuando el usuario haga clic en el botón "No"
  }


  toggleModal(){
    this.showModal = !this.showModal;
  }
}
