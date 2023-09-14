import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing-module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserslistComponent } from './userslist/userslist.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ProfessorsComponent } from './professors/professors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { ModifyModalComponent } from './modify-modal/modify-modal.component';




@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    UserslistComponent,
    CourseListComponent,
    ProfessorsComponent,
    AddProfessorComponent,
    ModifyModalComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
