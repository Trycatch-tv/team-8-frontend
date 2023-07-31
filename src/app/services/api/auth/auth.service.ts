import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  static isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  static login() {
    localStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticated = true;
    console.log(localStorage.getItem('isAuthenticated')); // Verificar el valor actual de 'isAuthenticated' en localStorage

    return this.isAuthenticated
  }

  static logout() {
    console.log("pasa logout")
    localStorage.setItem('isAuthenticated', 'false');
    this.isAuthenticated = false;

    console.log(localStorage.getItem('isAuthenticated')); // Verificar el valor actual de 'isAuthenticated' en localStorage
    return this.isAuthenticated
  }




}
