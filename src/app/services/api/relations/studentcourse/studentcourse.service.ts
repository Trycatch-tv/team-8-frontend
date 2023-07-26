import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { apiUrl } from 'src/app/shared/helpers/prod_dev';

@Injectable({
  providedIn: 'root'
})
export class StudentcourseService {

  constructor(private http: HttpClient) { }

  //static isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  static data_login(id:any,nombre:any,correo:any) {
    localStorage.setItem('id',id);
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('email',correo)

    console.log(id,"--",nombre,"----",correo)
  }



  getCursosPorEstudiante(estudianteId: number): Observable<any> {
    //const url = `http:localhost:8000/estudiantes/${estudianteId}/cursos/`;
    return this.http.get(`${apiUrl}api/estudiantes/${estudianteId}/cursos/`);
  }









}
