import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import ICourse from 'src/app/core/models/course.model';
import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';
import { CartService } from 'src/app/core/services/cart.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
courses :ICourse[]=[];
totalPrice :number=0;
subscription !:Subscription;

constructor( 
  private activeModal:NgbActiveModal,
  private cartService:CartService,
  private authStorageService :AuthStorageService,
  private modalService :NgbModal,
){}

ngOnInit(): void {
 this.subscription=this.cartService.coursesList$.subscribe({
    next :(res)=>{
      this.courses=res;
     this.totalPrice = this.courses.reduce((acc,course)=>{
       return acc+course.price
      },0)
    }
  }
  )
}

deleteCourse(course:ICourse){
  this.cartService.removeCourseFromCard(course.id)
}

onCheckout(course:ICourse[]){
  this.authStorageService.storeCartTotal(this.totalPrice)
  // this.cartService.removeAllCartCourses()
  // this.authStorageService.storeEnrolledCourse(course)
  this.close()
  this.open()
}

open(){
  const ref=this.modalService.open(PaymentComponent,{scrollable:true,size:'m',modalDialogClass:'float-center'})
}

close(){
  this.activeModal.close()
}

ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}
