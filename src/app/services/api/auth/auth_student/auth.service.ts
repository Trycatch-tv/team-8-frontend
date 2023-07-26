import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  static isAuthenticated_student = localStorage.getItem('isAuthenticated_student') === 'true';

  static login() {
    localStorage.setItem('isAuthenticated_student', 'true');
    this.isAuthenticated_student = true;
    console.log(localStorage.getItem('isAuthenticated_student')); // Verificar el valor actual de 'isAuthenticated_student' en localStorage

    return this.isAuthenticated_student
  }

  static logout() {
    console.log("pasa logout")
    localStorage.setItem('isAuthenticated_student', 'false');
    this.isAuthenticated_student = false;

    console.log(localStorage.getItem('isAuthenticated_student')); // Verificar el valor actual de 'isAuthenticated_student' en localStorage
    return this.isAuthenticated_student
  }

}
