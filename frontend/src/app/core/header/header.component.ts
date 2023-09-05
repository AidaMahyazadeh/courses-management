import { Component } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
hatIcon ='./assets/images/student-hat.jpg'

constructor(
  private authorizationService : AuthorizationService,
  private authService : AuthenticationService,
  private router: Router
  ){}

isLoggedin(){
 return this.authorizationService.isLoggedIn()
}

logout(){
  this.authService.logout()
  this.router.navigate([''])
}

}
