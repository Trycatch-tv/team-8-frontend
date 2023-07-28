import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(private http:HttpClient) { }

  getApiDepartaments(){
    return this.http.get("https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json");
  }
}
