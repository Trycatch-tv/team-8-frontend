import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { apiUrl } from '../../../shared/helpers/prod_dev';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private http: HttpClient) {}

  //Login Post Htpp
  login_admin(formdata:any){
    return this.http.post(`${apiUrl}'user-login/`, formdata);
  }

}
