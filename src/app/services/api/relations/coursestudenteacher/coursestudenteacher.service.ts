import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/app/shared/helpers/prod_dev';

@Injectable({
  providedIn: 'root'
})
export class CoursestudenteacherService {

  constructor(private http:HttpClient) { }

  agregarCursoProfesorAEstudiante(idCurso: number, idProfesor: number, idEstudiante: number) {
    const url = `${apiUrl}agregar_curso_profesor_a_estudiante/`;
    const data = {
      cursos: idCurso,
      profesores: idProfesor,
      studiantes: idEstudiante
    };


    console.log(data)
    return this.http.post(url, data);
  }
}
