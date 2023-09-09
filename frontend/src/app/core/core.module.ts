import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth/auth.interceptor';
import { SharedModule } from '../shared/shared.module';
import { SharedRoutingModule } from '../shared/shared-routing.module';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports :[HeaderComponent,FooterComponent],
  providers :[
    {
      provide : HTTP_INTERCEPTORS,
      useClass :AuthInterceptor,
      multi :true
    }
  ]
})
export class CoreModule { }
