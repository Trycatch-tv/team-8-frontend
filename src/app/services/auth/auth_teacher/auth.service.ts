import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  static isAuthenticated_teacher = localStorage.getItem('isAuthenticated_teacher') === 'true';

  static login() {
    localStorage.setItem('isAuthenticated_teacher', 'true');
    this.isAuthenticated_teacher = true;
    console.log(localStorage.getItem('isAuthenticated_teacher')); // Verificar el valor actual de 'isAuthenticated_teacher' en localStorage

    return this.isAuthenticated_teacher
  }

  static logout() {
    console.log("pasa logout")
    localStorage.setItem('isAuthenticated_teacher', 'false');
    this.isAuthenticated_teacher = false;

    console.log(localStorage.getItem('isAuthenticated_teacher')); // Verificar el valor actual de 'isAuthenticated_teacher' en localStorage
    return this.isAuthenticated_teacher
  }




}
