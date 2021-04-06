import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdatedUserResponse } from 'src/app/auth/authInterfaces/auth.interface';

import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild('profilePicInput') profilePic!:ElementRef<HTMLInputElement>;
  @ViewChild('profilePic') profileImg!:ElementRef<HTMLImageElement>;
  get userData () {
    return this.managerAppService._authenticatedUser;
  }

  userProfileForm: FormGroup  = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    passwordConfirm: ['', [Validators.required]]
  })

  constructor(private managerAppService:ManagerAppService, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.userData)
  }

  customValidator() {

    return () => {
      if(this.userProfileForm.controls.password.value === this.userProfileForm.controls.passwordConfirm.value) {
        return true
      } else {
        return {status:'false', message: 'The password doesnt match'}
      }
    }
  }

  loadImagePrevUpload(e:any) {
    if(e.target.files) {
      const reader = new FileReader(); 
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (event:any) => {
        this.profileImg.nativeElement.src = `${event.target.result}`
      }

      this.managerAppService.patchProfileImg(e.target.files[0]).subscribe((resp:any) => {
        console.log(resp);
        // this.managerAppService._authenticatedUser.img = resp
        this.managerAppService._authenticatedUser.img = resp.url;
      })

    }
  }
  isInvalid(input: string){
    return this.userProfileForm.controls[input].errors 
            && this.userProfileForm.controls[input].touched
  }

  sendForm() {
    console.log(this.userProfileForm.controls.password.value)
    if(this.userProfileForm.invalid) {
      this.userProfileForm.markAllAsTouched()
      return;
    }
    if(equalPass(this.userProfileForm.controls.password.value, this.userProfileForm.controls.passwordConfirm.value)) {
      this.userProfileForm.controls.password.invalid
      this.userProfileForm.controls.passwordConfirm.invalid
      return;
    }
    console.log(this.userProfileForm)
    console.log(this.userProfileForm.value)

    this.managerAppService.patchUserData(this.userProfileForm.value).subscribe((resp: UpdatedUserResponse) => {
      console.log(resp)
       if(resp.status === 'success') {
         console.log('patata')
         this.managerAppService._authenticatedUser = resp.updatedUser;
       }
    }, (error => {
      console.log(error)
    }))


  }

}

export const equalPass = (pass1:string, pass2:string) => {

  if(pass1 !== pass2) {
    return true;
  } else {
    return false;
  }

}