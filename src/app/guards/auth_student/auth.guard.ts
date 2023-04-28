import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth_student/auth.service';
Router
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router){}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (AuthService.isAuthenticated_student) {
        console.log(AuthService.isAuthenticated_student)
        // El usuario está autorizado para acceder a la ruta
        return true;
      } else {
        // El usuario no está autorizado para acceder a la ruta
        this.router.navigate(['/login/']);
        return false;
      }
  }

}
