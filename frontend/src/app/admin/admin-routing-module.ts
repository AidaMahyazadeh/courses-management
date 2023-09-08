import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { UserslistComponent } from "./userslist/userslist.component";

const routes :Routes =[
    {path :'',component:AdminComponent,pathMatch:'full',children:[
        {path :'user-list',component :UserslistComponent}
    ]}
]
    

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }