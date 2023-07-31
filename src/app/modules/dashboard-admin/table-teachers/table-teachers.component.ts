import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TeacherService } from 'src/app/services/api';
@Component({
  selector: 'app-table-teachers',
  templateUrl: './table-teachers.component.html',
  styleUrls: ['./table-teachers.component.css'],
  providers: [MessageService]

})
export class TableTeachersComponent implements OnInit {
  col:any;
  datos:any;
  showModal=false;
  itemId:any;

  constructor(private teacherservice:TeacherService,private messageService: MessageService){}
  ngOnInit(): void {
    this.teacherservice.getlist_teachers().subscribe((data:any) =>{
      //this.users = JSON.parse(data);
      this.datos = data;
      this.col = Object.keys(data[0]).slice(0,8)
    });

  }


  toggleModal(){
    this.showModal = !this.showModal;
  }


  showConfirm(id: any) {
    this.messageService.add({key: 'confirm', sticky: true, severity:'warn', summary:'Estas Seguro?', detail:'Desea elimina este estudiante'});
    this.itemId = id;
  }

  onConfirm() {
    this.messageService.clear('confirm');

    /*
    fetch(`http://localhost:8000/delete_teacher/${this.itemId}`)
    .then(console.log);
*/

    this.teacherservice.deleteTeacher(this.itemId).subscribe((data:any)=>{
    })

    // aquí puedes agregar la lógica que se ejecutará cuando el usuario haga clic en el botón "Yes"
  }

  onReject() {
    this.messageService.clear('confirm');

    // aquí puedes agregar la lógica que se ejecutará cuando el usuario haga clic en el botón "No"
  }



}
