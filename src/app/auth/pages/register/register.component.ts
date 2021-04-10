import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerAppService } from 'src/app/manager-app/services/manager-app.service';
import { NotifyService } from 'src/app/manager-app/services/notify.service';
import { NotificationsComponent } from 'src/app/shared/notifications/notifications.component';
import { RegisterResponse } from '../../authInterfaces/auth.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public errorApi: string = '';
  @ViewChild('registerButton') regButton!:ElementRef<HTMLButtonElement>;
  //BASIC REACTIVE FORM 
  // registerForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   passwordConfirm: new FormControl('')

  // });

  //FORMBUILDER REACTIVE FORM 
  registerForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)] ,],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    passwordConfirm: ['', Validators.required]
  })

  constructor(private fb:FormBuilder, private notifyService: NotifyService, private auth: AuthService, private router: Router, private notification: NotificationsComponent, private managerApp:ManagerAppService) { }

  ngOnInit(): void {
  }

  //Reactive Form
  reactiveForm(){
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      passwordConfirm: ['']
    })
  }
  //Quick validator 
  //TODO. better validation
  isInvalid(input: string){
    return this.registerForm.controls[input].errors 
            && this.registerForm.controls[input].touched
  }

  sendForm(){
    this.errorApi = '';
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
      return;
    }

    this.auth.authRegister(this.registerForm.value).subscribe((resp:RegisterResponse) => {
      this.regButton.nativeElement.disabled = true;
      this.notifyService.getMessage('loading');
      this.notification.toggleNotification();
      setTimeout(() => {
        if(resp.status === 'success'){
          this.notification.toggleNotification();
          this.managerApp.token = `Bearer ${resp.token}`;
          this.managerApp.headers = new HttpHeaders().set('Authorization', this.managerApp.token);
  
          // this.auth._token = resp.token;
          localStorage.setItem('bearer-todo', `Bearer ${resp.token}`);
          // console.log(resp.newUser)
          // console.log(resp.token)
          this.auth._user = resp.newUser;
          this.notifyService.getMessage('registration');
          this.notification.toggleNotification();
          setTimeout(() => {
            
            this.router.navigateByUrl('/v2/manager-app/home/workspaces')
          }, 1500);
        }
        
      }, 2000);
    },err => {
      console.log(err)
      this.errorApi = err.error.message;
      this.regButton.nativeElement.disabled = false;
      this.notification.toggleNotification();
      
    })

    this.registerForm.reset();
  }
}

