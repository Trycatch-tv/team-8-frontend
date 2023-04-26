import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AdminService {



  constructor(private http: HttpClient) {}

  getlist_students() {
    return this.http.get<any[]>('http://localhost:8000/list_students/');
  }

  getlist_teachers() {
    return this.http.get<any[]>('http://localhost:8000/list_teachers/');
  }

  getlist_courses() {
    return this.http.get<any[]>('http://localhost:8000/list_courses/');
  }


  deleteTeacher(id: number) {
    return this.http.delete(`http://localhost:8000/delete_teacher/${id}`);
  }

  deleteStudent(id: number) {
    return this.http.delete(`http://localhost:8000/delete_student/${id}`);
  }

  deleteCourse(id: number) {
    return this.http.delete(`http://localhost:8000/delete_course/${id}`);
  }

  add_teacher(){

    const formData = new FormData();
    formData.append("nombre","Programmer");
    formData.append("correo","treft@gmail.com");
    formData.append("area_especializacion","aser");
    formData.append("descripcion","Programmer");
    formData.append("telefono","4334344");
    formData.append("estado","Programmer");
    formData.append("contrasena","dentreaca");


    //console.log(formData)

    return this.http.post<any>('http://localhost:8000/add_teacher/',formData).subscribe((data:any)=>{
        console.log(data)
    },
    (error) => {
      console.log('Error during POST request', error);
      // Aquí puede manejar cualquier error que haya ocurrido
    })
  }

}
