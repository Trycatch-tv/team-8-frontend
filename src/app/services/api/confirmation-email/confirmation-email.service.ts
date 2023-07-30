import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationEmailService {

  constructor(private http:HttpClient) { }

  generateCodeEmail(email:string){
    return this.http.post(`http://localhost:8000/security/account/verify/email/generate-code/${email}`,email);
  }

  verifyCodeEmail(email:string,code:string){
    return this.http.post(`http://localhost:8000/security/account/verify/email/verify-code/${email}/${code}`,email);
  }
}
