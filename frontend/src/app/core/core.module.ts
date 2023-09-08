import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth/auth.interceptor';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[HeaderComponent],
  providers :[
    {
      provide : HTTP_INTERCEPTORS,
      useClass :AuthInterceptor,
      multi :true
    }
  ]
})
export class CoreModule { }
