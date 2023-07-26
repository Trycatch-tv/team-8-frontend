import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { apiUrl } from 'src/app/shared/helpers/prod_dev';

@Injectable({
  providedIn: 'root'
})
export class TeachercourseService {

  constructor(private http:HttpClient) { }



  static data_login(id:any,nombre:any,correo:any) {
    localStorage.setItem('id_teacher',id);
    localStorage.setItem('nombre_teacher',nombre)
    localStorage.setItem('email_teacher',correo)

  }


  getCursosPorProfesor(profesorId: number): Observable<any> {
    //const url = `http:localhost:8000/estudiantes/${profesorId}/cursos/`;
    return this.http.get(`${apiUrl}api/profesor/${profesorId}/cursos/`);
  }

  agregarCursoProfesor(idCurso: number, idProfesor: number) {
    const url = `${apiUrl}agregar_curso_profesor/`;
    const data = {
      cursos: idCurso,
      profesores: idProfesor,
    };


    console.log(data)
    return this.http.post(url, data);
  }





}
