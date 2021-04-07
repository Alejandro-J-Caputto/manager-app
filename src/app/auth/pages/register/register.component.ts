import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb:FormBuilder, private notifyService: NotifyService, private auth: AuthService, private router: Router, private notification: NotificationsComponent) { }

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
    console.log(this.registerForm.value);

    this.auth.authRegister(this.registerForm.value).subscribe((resp:RegisterResponse) => {

      if(resp.status === 'success'){

        localStorage.setItem('bearer-todo', resp.token);
        console.log(resp.newUser)
        console.log(resp.token)
        this.auth._user = resp.newUser;
        this.notifyService.getMessage('registration');
        this.notification.toggleNotification();
        setTimeout(() => {
          
          this.router.navigateByUrl('/v2/manager-app/home/workspaces')
        }, 2000);
      }
    },err => {
      console.log(err)
      this.errorApi = err.error.message;
      
    })

    this.registerForm.reset();
  }
}

