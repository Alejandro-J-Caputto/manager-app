import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm, LoginResponse } from '../../authInterfaces/auth.interface';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:LoginForm = {
    email: '',
    password: ''
  }


  constructor(private auth: AuthService, private router: Router) { }
  
  ngOnInit(): void {
  }

  loginFormTemplate(logForm:NgForm){
    if(logForm.invalid){
      logForm.control.markAllAsTouched();
      Object.values(logForm.controls).map(input => input.markAllAsTouched());
      return;
    }
    if(logForm.valid){
      this.auth.authLogin(this.login).subscribe((resp:LoginResponse) => {
        if(resp.status === 'success'){
          localStorage.setItem('bearer-todo', resp.token);
          this.auth._user = resp.user;
          this.router.navigate(['/v2/manager-app/home'])
        }
      }, err => console.log(err));
    }
  }

}
