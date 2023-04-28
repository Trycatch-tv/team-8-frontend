import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }



  add_student(formdata:any){
    return this.http.post('http://localhost:8000/add_student/',formdata);
  }
}
