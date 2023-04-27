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



  //GET http
  getlist_students() {
    return this.http.get<any[]>('http://localhost:8000/list_students/');
  }

  getlist_teachers() {
    return this.http.get<any[]>('http://localhost:8000/list_teachers/');
  }

  getlist_courses() {
    return this.http.get<any[]>('http://localhost:8000/list_courses/');
  }



  //Delete Http
  deleteTeacher(id: number) {
    return this.http.delete(`http://localhost:8000/delete_teacher/${id}/`);
  }

  deleteStudent(id: number) {
    return this.http.delete(`http://localhost:8000/delete_student/${id}/`);
  }

  deleteCourse(id: number) {
    return this.http.delete(`http://localhost:8000/delete_course/${id}/`);
  }


  //ADD Htpp
  add_teacher(formdata:any){
    //console.log(formData)
    return this.http.post<any>('http://localhost:8000/add_teacher/',formdata);
  }


  //Get update detail

  get_teacher_detail(id:any){
      return this.http.get(`http://localhost:8000/update_teacher/${id}/`);
  }

  get_student_detail(id:any){
      return this.http.get(`http://localhost:8000/update_student/${id}/`);
  }

  get_course_detail(id:any){
    return this.http.get(`http://localhost:8000/update_course/${id}/`);
  }

  //Put Htpp

  update_teacher(formdata:any,id:any){
    return this.http.put(`http://localhost:8000/update_teacher/${id}/`, formdata);
  }
  update_course(formdata:any, id:any){
    return this.http.put(`http://localhost:8000/update_course/${id}/`, formdata);
  }

  update_student(formdata:any, id:any){
    return this.http.put(`http://localhost:8000/update_student/${id}/`, formdata);
  }


  //Login Post Htpp

  login_admin(formdata:any){
    return this.http.post(`http://localhost:8000/user-login/`, formdata);
  }

}
