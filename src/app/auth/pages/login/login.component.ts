import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerAppService } from 'src/app/manager-app/services/manager-app.service';
import { NotifyService } from 'src/app/manager-app/services/notify.service';
import { NotificationsComponent } from 'src/app/shared/notifications/notifications.component';
import { LoginForm, LoginResponse } from '../../authInterfaces/auth.interface';
import { AuthService } from '../../services/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public errorApi: string = '';

  @ViewChild('loginButton') logButton!:ElementRef<HTMLButtonElement>
  login:LoginForm = {
    email: '',
    password: ''
  }



  constructor(private auth: AuthService, private router: Router, private notifyService: NotifyService, private notification: NotificationsComponent,private managerApp:ManagerAppService) { }
  
  ngOnInit(): void {
  }

  loginFormTemplate(logForm:NgForm){
    this.errorApi = '';
    if(logForm.invalid){
      logForm.control.markAllAsTouched();
      Object.values(logForm.controls).map(input => input.markAllAsTouched());
      return;
    }
    if(logForm.valid){
      // console.log(this.login.password)
      this.notifyService.getMessage('loading')
      this.notification.toggleNotification();
      logForm.control.disable();
      this.auth.authLogin(this.login).subscribe((resp:LoginResponse) => {
        this.logButton.nativeElement.disabled = true;
        setTimeout(() => {
          
          if(resp.status === 'success'){
            // this.notification.toggleNotification();
            // this.auth._token = resp.token;
            this.notifyService.getMessage('login');
            this.managerApp.token = `Bearer ${resp.token}`;
            this.managerApp.headers = new HttpHeaders().set('Authorization', this.managerApp.token);
            localStorage.setItem('bearer-todo', `Bearer ${resp.token}`);
            this.auth._user = resp.user;
            setTimeout(() => {
              
              this.router.navigate(['/v2/manager-app/home/workspaces'])
            }, 1500);
          }
        }, 2000);
      }, err => {
        console.log(err)
        this.errorApi = err.error.message;
        this.logButton.nativeElement.disabled = false;
        this.notifyService.getMessage('wuops', this.errorApi);

        setTimeout(() => {
          this.notification.toggleNotification();
        }, 2500);
        this.logButton.nativeElement.disabled = false;
        logForm.control.enable();
        // this.notification.toggleNotification();
      });
    }
  }

}
