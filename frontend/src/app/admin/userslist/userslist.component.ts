import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService){}

  ngOnInit(){
    this.authenticationService.getAllUsers().subscribe({
      next : (res)=>{
 
      },
      error :(err)=>{

      }
    })
  }
}
