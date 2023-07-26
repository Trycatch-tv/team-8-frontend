import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { apiUrl } from 'src/app/shared/helpers/prod_dev';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }



  add_student(formdata:any){
    return this.http.post(`${apiUrl}add_student/`,formdata);
  }

  getlist_students() {
    return this.http.get<any[]>(`${apiUrl}list_students/`);
  }

  deleteStudent(id: number) {
    return this.http.delete(`${apiUrl}/delete_student/${id}/`);
  }


  get_student_detail(id:any){
    return this.http.get(`${apiUrl}/update_student/${id}/`);
  }


  update_student(formdata:any, id:any){
    return this.http.put(`${apiUrl}/update_student/${id}/`, formdata);
  }


  login_student(formdata:any){
    return this.http.post(`${apiUrl}/student-login/`, formdata);
  }


}
