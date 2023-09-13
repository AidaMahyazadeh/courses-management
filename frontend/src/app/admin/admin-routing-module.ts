import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { UserslistComponent } from "./userslist/userslist.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { ProfessorsComponent } from "./professors/professors.component";

const routes :Routes =[
    {path :'',component:AdminComponent,children:[
        {path :'users-list',component :UserslistComponent},
        {path :'courses-list',component :CourseListComponent},
        {path :'professors-list',component:ProfessorsComponent}
    ]}
]
    

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }