import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { apiUrl } from 'src/app/shared/helpers/prod_dev';


@Injectable({
  providedIn: 'root'
})
export class StudenteacherService {

  constructor(private http:HttpClient) { }

  getEstudiantesPorProfesor(profesorId: number): Observable<any> {
    //const url = `http:localhost:8000/estudiantes/${profesorId}/cursos/`;
    return this.http.get(`${apiUrl}/api/profesores/${profesorId}/estudiantes/`);
  }


}
