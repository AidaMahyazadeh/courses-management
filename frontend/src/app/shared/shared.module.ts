import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { CardComponent } from './components/card/card.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CardComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ]

})
export class SharedModule { }
