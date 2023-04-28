import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentcourseService {

  constructor() { }

  //static isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  static data_login(id:any,nombre:any,correo:any) {
    localStorage.setItem('id',id);
    localStorage.setItem('nombre',nombre)
    localStorage.setItem('email',correo)

    console.log(id,"--",nombre,"----",correo)
  }



}
