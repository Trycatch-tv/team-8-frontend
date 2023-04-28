import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachercourseService {

  constructor() { }



  static data_login(id:any,nombre:any,correo:any) {
    localStorage.setItem('id_teacher',id);
    localStorage.setItem('nombre_teacher',nombre)
    localStorage.setItem('email_teacher',correo)

    console.log(id,"--",nombre,"----",correo)
  }

}
