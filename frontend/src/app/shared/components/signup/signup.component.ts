import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminAuthStorageService } from 'src/app/core/services/admin/admin-auth-storage.service';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !:FormGroup;
  type ='password';
  eyeIcon ='fa-eye-slash'
  isText =false;
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
   emailPattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  constructor(
    private authService:AuthenticationService,
    private toast :ToastrService,
    private router :Router,
    private adminAuthStorageService:AdminAuthStorageService
  ){}


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      username : new FormControl('',[Validators.required,Validators.minLength(4)]),
      email : new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      password : new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)]),
      enrolledCourse : new FormControl ([])
    })
  }

  hideShowPassword(){
    this.isText = !this.isText;
    this.type = this.isText ? 'text' : 'password';
    this.eyeIcon = this.isText ? 'fa-eye' : 'fa-eye-slash';
  }

  onSignup(){
    if(this.signupForm.valid){
      this.authService.signup(this.signupForm.value).subscribe({
        next :(res =>{
          const{firstname,lastname,username,email,password,enrolledCourse}= this.signupForm.value
          const user ={firstname,lastname,username,email,password,enrolledCourse};
           this.adminAuthStorageService.storeAllUsers(user)
           console.log(user)
          this.toast.success(`${this.signupForm.controls['firstname'].value}, you are signed up successfully.`)
          this.signupForm.reset();
          this.router.navigate(['/login'])
        }),
        error :(err=>{
          this.toast.error(err.error.message)
        })
      })
    }else{
       this.toast.warning('You should fill in all fields.')
    }
  }
}