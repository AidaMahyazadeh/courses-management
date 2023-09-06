import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { SignupComponent } from './shared/components/signup/signup.component';
import { HomeComponent } from './shared/components/home/home.component';
import { adminAuthGuard } from './core/services/guards/admin-auth.guard';

const routes: Routes = [
  {path : '', redirectTo :'login',pathMatch:'full'},
  {path : 'home', component: HomeComponent},
  {path : 'login',component: LoginComponent},
  {path : 'signup' ,component: SignupComponent},
  {path :'admin',canActivate :[adminAuthGuard] ,loadChildren:()=>import('./admin/admin.module').then(module=>module.AdminModule)},
  {
    path :'courses',loadChildren :()=>import('./courses/courses.module').then(module=>module.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
