import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ISignUpForm from '../../models/signup.model';
import { ILoginForm } from '../../models/login.model';
import { Observable } from 'rxjs';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'http://localhost:8000/';
  
  constructor(
    private http : HttpClient,
    private AuthStorageService :AuthStorageService
    ) { }

  signup ( signUpForm : ISignUpForm) {
    return this.http.post (`${this.baseUrl}signup`,signUpForm)
   }
 
   login (loginForm : ILoginForm): Observable<any>{
    return this.http.post (`${this.baseUrl}login`,loginForm)
   }

   logout(){
    this.AuthStorageService.removeTokenRole()
   }
  
  getAllUsers ()   {
    return this.http.get (`${this.baseUrl}users`)
  }
}
