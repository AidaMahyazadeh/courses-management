import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      userName : new FormControl('',[Validators.required,Validators.minLength(4)]),
      email : new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
      password : new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)])
    })
  }

  hideShowPassword(){
    this.isText = !this.isText;
    this.type = this.isText ? 'text' : 'password';
    this.eyeIcon = this.isText ? 'fa-eye' : 'fa-eye-slash';
  }

  onSignup(){
    if(this.signupForm.valid){

    }else{

    }
  }
}
