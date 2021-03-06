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
  //TODO. Add more Validators a custom Validators
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
    return  this.registerForm.controls[input].errors &&  this.registerForm.controls[input].touched
  }

  sendForm(){
    this.errorApi = '';
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
      return;
    }
    this.notifyService.getMessage('loading');
    this.notification.toggleNotification();

    //Set form status to disabled while checking the response
    this.registerForm.disable();
    this.regButton.nativeElement.disabled = true;
    //Register Http Observable
    this.auth.authRegister(this.registerForm.value)
      .subscribe((resp:RegisterResponse) => {
        setTimeout(() => {
          if(resp.status === 'success'){
            this.notifyService.getMessage('registration');
            this.managerApp.token = `Bearer ${resp.token}`;
            this.managerApp.headers = new HttpHeaders().set('Authorization', this.managerApp.token);
            localStorage.setItem('bearer-todo', `Bearer ${resp.token}`);
            this.auth._user = resp.newUser;

            setTimeout(() => {  
              this.router.navigateByUrl('/v2/manager-app/home/workspaces')
            }, 1500);
          }
        }, 2000);
      },err => {
        // console.log(err)
        this.errorApi = err.error.message;
        this.regButton.nativeElement.disabled = false;
        this.notifyService.getMessage('wuops', this.errorApi);

        setTimeout(() => {
          this.notification.toggleNotification();
        }, 2500);
        this.regButton.nativeElement.disabled = false;
        this.registerForm.enable();
      })

      this.registerForm.reset();
  }
}

