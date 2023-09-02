import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ILogin } from 'src/app/core/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !:FormGroup;
  eyeIcon = 'fa-eye-slash';
  type = 'password';
  isText = false;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usernam : new FormControl(''),
      password : new FormControl('')
    })
  }

  hideShowPassword(){
    this.isText =!this.isText
    this.type = this.isText ?'text':'password';
    this.eyeIcon = this.isText ?'fa-eye': 'fa-eye-slash';
  }
  
onLogin(){

}
}
