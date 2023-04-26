import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getAllCourses() {
    return this.http.get('http://localhost:8000/list_courses/');
  }
  loginStudent(data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    const url = 'http://localhost:8000/student-login/'
    return this.http.post(url, data, { headers })
  }
}
