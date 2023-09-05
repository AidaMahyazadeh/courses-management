import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  constructor() { }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  storeRole(role:string){
    localStorage.setItem('role',role)
  } 

  getRole(){
   return localStorage.getItem('role')
  }

  removeTokenRole(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
  }

  storeUserName(username :string){
    localStorage.setItem('username',username)
  }

  getUserName(){
    return localStorage.getItem('username')
  }
}
