import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import ICourse from 'src/app/core/models/course.model';
import IUser from 'src/app/core/models/user.model';
import { AdminAuthStorageService } from 'src/app/core/services/admin/admin-auth-storage.service';
import { UsersListService } from 'src/app/core/services/admin/users-list.service';



@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit{
  users !:IUser[];
  subscription !:Subscription;
  constructor(private adminAuthStorageService :AdminAuthStorageService){}

  ngOnInit(){
  this.users=this.adminAuthStorageService.getAllUsers()  
}

// insertEnrolledCourse(username:string,courses:ICourse[]){
//  let user= this.users.find(user=>user.username==username)
//  user?.enrolledCourse?.push(...courses)
// }

onDelete(username:string){
  this.users = this.users.filter(user=>user.username!=username)
}

}