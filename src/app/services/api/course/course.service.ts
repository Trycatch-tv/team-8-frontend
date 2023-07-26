import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/app/shared/helpers/prod_dev';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }


  getOneCourse(id:string){
    return this.http.get(`${apiUrl}update_course/${id}/`);
  }

  getlist_courses() {
    return this.http.get<any[]>(`${apiUrl}list_courses/`);
  }

  add_course(data:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${apiUrl}add_course/`,data,{headers});
  }

  update_course(data:any,id:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${apiUrl}update_course/${id}/`,data,{headers});
  }


  deleteCourse(id: number) {
    return this.http.delete(`${apiUrl}delete_course/${id}/`);
  }

  get_course_detail(id:any){
    return this.http.get(`${apiUrl}update_course/${id}/`);
  }







}
