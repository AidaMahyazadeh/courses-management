import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing-module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserslistComponent } from './userslist/userslist.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ProfessorsComponent } from './professors/professors.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    UserslistComponent,
    CourseListComponent,
    ProfessorsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
