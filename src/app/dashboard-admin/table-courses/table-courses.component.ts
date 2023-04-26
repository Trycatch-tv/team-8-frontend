import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin/admin.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.css'],
  providers: [MessageService]

})
export class TableCoursesComponent implements OnInit{

  col:any;
  datos:any;
  itemId:any;

  constructor(private service_admin:AdminService,private messageService: MessageService){}
  ngOnInit(): void {
    this.service_admin.getlist_courses().subscribe((data:any) =>{
      //this.users = JSON.parse(data);
      this.datos = data;
      this.col = Object.keys(data[0]).slice(0,7)

      console.log(data)
    });

  }


  showConfirm2(id: any) {
    this.messageService.add({key: 'confirm', sticky: true, severity:'warn', summary:'Estas Seguro?', detail:'Desea elimina este curso'});
    this.itemId = id;
  }

  onConfirm2() {
    this.messageService.clear('confirm');
    this.service_admin.deleteCourse(this.itemId).subscribe((data:any)=>{
      console.log(data)
    })

    // aquí puedes agregar la lógica que se ejecutará cuando el usuario haga clic en el botón "Yes"
  }

  onReject2() {
    this.messageService.clear('confirm');

    // aquí puedes agregar la lógica que se ejecutará cuando el usuario haga clic en el botón "No"
  }
}
