import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';

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

  constructor(
    private authStorageService:AuthStorageService,
    private activeModal:NgbActiveModal,
    private router:Router
  ){} 


  ngOnInit() {
    this.totalCart=this.authStorageService.getCartTotal()
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
          onApprove: (data) => {
            
              // console.log('onApprove - transaction was approved, but not authorized', data, actions);
              // actions.order.get().then((details:any) => {
              //     console.log('onApprove - you can get full order details inside onApprove: ', details);
              // });

          },
          onClientAuthorization: (data) => {
              console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
              this.showSuccess = true;
              this.totalCart =0
              this.activeModal.close()
              this.authStorageService.removeCartTotal()
              this.router.navigate(['courses'])
          },
          onCancel: (data, actions) => {
              console.log('OnCancel', data, actions);
              this.showCancel = true;

          },
          onError: err => {
              console.log('OnError', err);
              this.showError = true;
          },
          onClick: (data, actions) => {
              console.log('onClick', data, actions);
          }
      };
  }
}
