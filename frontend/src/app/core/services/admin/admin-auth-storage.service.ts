import { Injectable } from '@angular/core';
import IUser from '../../models/user.model';

import ICourse from '../../models/course.model';
import { AuthStorageService } from '../auth/auth-storage.service';




@Injectable({
  providedIn: 'root'
})
export class AdminAuthStorageService {
  
 usersList :IUser[] =[]; 
 enrolledCourse :ICourse[]=[];

 
  constructor(private authStorageService :AuthStorageService){}

  storeUserslist(){
    localStorage.setItem('usersList',JSON.stringify(this.usersList))
    }

  storeAllUsers(user :IUser){ 
  this.usersList.push(user)
  this.storeUserslist()
  }

  getUserByUsername(username:string){
    let index :number;
      this.usersList= this.getAllUsers() 
      return  index = this.usersList.findIndex(
        user=>user.username===username)!
    
    }

   updateExistedUsers(username: string,enrolledCourse :ICourse[]){
    let selectedUser=this.getUserByUsername(username)
    if(this.usersList[selectedUser].enrolledCourse.length>0){
      this.usersList[selectedUser].enrolledCourse.push(...enrolledCourse)
      this.storeUserslist()
    }else{
      this.usersList[selectedUser].enrolledCourse=enrolledCourse
      this.storeUserslist()
    }
  }
    
     getAllUsers(){
      return JSON.parse(localStorage.getItem('usersList')!) 
     }

     
}

 
    



  






// userList!:IUser[];
//   userListSubject$= new BehaviorSubject<IUser[]>([]);

//   storeAllUsers(user:IUser){
//     this.userList.push(user)
//     localStorage.setItem('usersList',JSON.stringify(this.userList))
//     this.userListSubject$.next(this.userList)
//   }

//   getAllUsers(){
//     this.userList=JSON.parse (localStorage.getItem('usersList')!)
//   }

//   deleteAllUsers(){
//     localStorage.removeItem('usersList')
//     this.userListSubject$.next([])
//   }