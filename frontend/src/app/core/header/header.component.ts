import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/auth/authorization.service';
import { AuthenticationService } from '../services/auth/authentication.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  cartItemLength :number=0;
  subscription !:Subscription;

constructor(
  private authorizationService : AuthorizationService,
  private router: Router,
  private modalService :NgbModal,
  private cartService :CartService,
  private authService : AuthenticationService,
  ){}

  ngOnInit(){
   this.subscription =this.cartService.coursesList$.subscribe({
      next:(
        res=>{
          this.cartItemLength=res.length
        }
      )
    }
    )
  }

isLoggedin(){
 return this.authorizationService.isLoggedIn()
}

logout(){
  this.authService.logout()
  this.router.navigate([''])
}

isAdmin(){
  return this.authorizationService.isAdmin()
}

openModal(){
 this.modalService.open(CardComponent,{scrollable:true,modalDialogClass:'float-end',size:'lg'})
}
 ngOnDestroy(): void {
   this.subscription.unsubscribe()
 }
}
