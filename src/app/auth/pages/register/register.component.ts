import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterResponse } from '../../authInterfaces/auth.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


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

  constructor(private fb:FormBuilder, private auth: AuthService, private router: Router) { }

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
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched()
      return;
    }
    console.log(this.registerForm.value);

    this.auth.authRegister(this.registerForm.value).subscribe((resp:RegisterResponse) => {
      if(resp.status === 'success'){
        localStorage.setItem('bearer-todo', resp.token);
        this.auth._user = resp.newUser;
        this.router.navigateByUrl('/v2/manager-app/dashboard')
      }
    },err => console.log(err))

    this.registerForm.reset();
  }
}

