import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import ICourse from 'src/app/core/models/course.model';
import { AdminAuthStorageService } from 'src/app/core/services/admin/admin-auth-storage.service';
import { UsersListService } from 'src/app/core/services/admin/users-list.service';
import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  payPalConfig ? : IPayPalConfig;
  showSuccess !:boolean;
  showError !:boolean;
  showCancel !:boolean;
  totalCart :number =0;
  selectedCourses !:ICourse[] 
  enrolledCourses !:ICourse[];
  @Output() orderId = new EventEmitter<string>()

  constructor(
    private authStorageService:AuthStorageService,
    private cartService :CartService,
    private activeModal:NgbActiveModal,
    private router:Router,
    private adminAuthStoragrService :AdminAuthStorageService,
    private userListService: UsersListService
  ){} 


  ngOnInit() {
    this.totalCart=this.authStorageService.getCartTotal()
    this.enrolledCourses = this.authStorageService.getCartItem()
    this.initConfig();
  }

  private initConfig(): void {
      this.payPalConfig = {
          currency: 'EUR',
          clientId: 'sb',
          createOrderOnClient: (data) => < ICreateOrderRequest > {
              intent: 'CAPTURE',
              purchase_units: [{
                  amount: {
                      currency_code: 'EUR',
                      value: `${this.totalCart}`,
                      breakdown: {
                          item_total: {
                              currency_code: 'EUR',
                              value: `${this.totalCart}`
                          }
                      }
                  },
                  items: [{
                      name: 'Enterprise Subscription',
                      quantity: '1',
                      category: 'DIGITAL_GOODS',
                      unit_amount: {
                          currency_code: 'EUR',
                          value: `${this.totalCart}`,
                      },
                  }]
              }]
          },
          advanced: {
              commit: 'true'
          },
          style: {
              label: 'paypal',
              layout: 'vertical'
          },
          onApprove: (data, actions) => {
            
              console.log('onApprove - transaction was approved, but not authorized', data, actions);
              actions.order.get().then((details:any) => {
                //   console.log('onApprove - you can get full order details inside onApprove: ', details);
                this.orderId.emit(data.orderID)
                //  alert( `Your order with this id ${data.orderID} has been placed successfully`)

              });

          },
          onClientAuthorization: (data) => {
              console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
              this.showSuccess = true;
              this.totalCart =0
              this.activeModal.close()
              this.authStorageService.removeCartTotal()
              this.authStorageService.storeEnrolledCourse(this.enrolledCourses)
              let userDetail=this.authStorageService.getAllUserDetail()
             this.adminAuthStoragrService.updateExistedUsers(userDetail.username,userDetail.enrolledCourse)  
              console.log(userDetail)
              this.authStorageService.removeCartItem()
              this.cartService.removeAllCartCourses()
              this.authStorageService.clearPayPalStorage()
              this.router.navigate(['courses'])
          },
          onCancel: (data, actions) => {
              console.log('OnCancel', data, actions);
              this.showCancel = true;
          },
          onError: err => {
              console.log('OnError', err);
              this.showError = true;
          }
      };
  }
}