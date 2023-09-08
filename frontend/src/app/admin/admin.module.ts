import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing-module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserslistComponent } from './userslist/userslist.component';




@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    UserslistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
