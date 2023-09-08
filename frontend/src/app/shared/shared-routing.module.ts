import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { CoursesRoutingModule } from "../courses/courses-routing.module";


const routes :Routes =[
    {path : 'home', component: HomeComponent},
    {path : 'login',component: LoginComponent},
    {path : 'signup' ,component: SignupComponent}
]

@NgModule({
    imports : [
        RouterModule.forChild(routes),
        CoursesRoutingModule
    ],
    exports : [RouterModule]
})
export class SharedRoutingModule{}