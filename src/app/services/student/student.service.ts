import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get('http://localhost:8000/list_courses/');
  }
}
