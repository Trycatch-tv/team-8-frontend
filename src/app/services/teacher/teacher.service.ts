import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService   {

  constructor(private http:HttpClient) { }

  getOneCourse(id:string){
    return this.http.get(`http://localhost:8000/update_course/${id}/`);
  } 

  add_course(data:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:8000/add_course/',data,{headers}); 
  }
  update_course(data:any,id:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`http://localhost:8000/update_course/${id}/`,data,{headers}); 
  }
}
