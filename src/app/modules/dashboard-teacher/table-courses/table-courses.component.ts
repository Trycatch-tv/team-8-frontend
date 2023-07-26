import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CourseService } from 'src/app/services/api/course/course.service';
import { TeachercourseService } from 'src/app/services/api';

@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  styleUrls: ['./table-courses.component.css']
})
export class TableCoursesComponent implements OnInit {

  col:any;
  datos!:any;
  itemId:any;

  constructor(private courseservice:CourseService,private messageService: MessageService,private courseteacher:TeachercourseService){}

  ngOnInit(): void {

    const id_profesor = Number(localStorage.getItem('id_teacher'));
    this.courseteacher.getCursosPorProfesor(id_profesor).subscribe((data:any) =>{
      //this.users = JSON.parse(data);

      this.datos = data["courses_teacher"]
      //this.col = Object.keys(data[0]).slice(0,7)
    });

  }

  showConfirm2(id: any) {
    this.messageService.add({key: 'confirm', sticky: true, severity:'warn', summary:'Estas Seguro?', detail:'Desea elimina este curso'});
    this.itemId = id;
  }

  onConfirm2() {
    this.messageService.clear('confirm');
    this.courseservice.deleteCourse(this.itemId).subscribe((data:any)=>{
      this.datos=this.datos.filter((item:any)=>item.id !== this.itemId)
    })

    // aquí puedes agregar la lógica que se ejecutará cuando el usuario haga clic en el botón "Yes"
  }

  onReject2() {
    this.messageService.clear('confirm');

    // aquí puedes agregar la lógica que se ejecutará cuando el usuario haga clic en el botón "No"
  }
}
