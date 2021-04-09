import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UpdatedUserResponse } from 'src/app/auth/authInterfaces/auth.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { NotificationsComponent } from 'src/app/shared/notifications/notifications.component';
import { EqualPass } from '../../manager-interfaces/checkpass.interface';

import { ManagerAppService } from '../../services/manager-app.service';
import { NotifyService } from '../../services/notify.service';

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
    name: [this.userData.name, [Validators.required, Validators.minLength(3)]],
    email: [this.userData.email, [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  resetPassForm:FormGroup = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(5)]],
    passwordReset: ['', [Validators.required, Validators.minLength(5)]], 
    passwordConfirm: ['', [Validators.required, Validators.minLength(5)]], 
  })

  constructor(
    private managerAppService:ManagerAppService, 
    private fb: FormBuilder,
    private notifyService: NotifyService,
    private notifications: NotificationsComponent,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    console.log(this.userData)
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
  isInvalidReset(input:string) {
    return this.resetPassForm.controls[input].errors 
            && this.resetPassForm.controls[input].touched
  }

  sendFormUser() {
    console.log(this.userProfileForm.controls.password.value)
    if(this.userProfileForm.invalid) {
      this.userProfileForm.markAllAsTouched()
      return;
    }
    
    console.log(this.userProfileForm)
    console.log(this.userProfileForm.value)

    this.managerAppService.patchUserData(this.userProfileForm.value).subscribe((resp: UpdatedUserResponse) => {
      console.log(resp)
       if(resp.status === 'success') {
          this.notifyService.getMessage('update', 'Your data was sucesfully updated')
          this.notifications.toggleNotification();
          setTimeout(() => {
            this.notifications.toggleNotification();
            this.managerAppService._authenticatedUser = resp.updatedUser;
          }, 1500);
        this.authService.checkToken().subscribe(resp => console.log(resp))

       }
    }, (error => {
      if(error) {
        console.log(error)
        this.notifyService.getMessage('wuops', error.error.message)
        this.notifications.toggleNotification()
        setTimeout(() => {
          this.notifications.toggleNotification();
        }, 3000);
      }
    }))

    this.userProfileForm.controls.password.reset();
  }

  resetPasswordForm() {


    if(this.resetPassForm.invalid) {
      this.resetPassForm.markAllAsTouched();
      return
    }
    console.log('hello')
    
    if(this.resetPassForm.valid && this.resetPassForm.controls.passwordReset.value !== this.resetPassForm.controls.passwordConfirm.value) {
      this.resetPassForm.controls.passwordReset.setValue('');
      this.resetPassForm.controls.passwordConfirm.setValue('');
      return;
    }

    this.managerAppService.resetUserPass(this.resetPassForm.value).subscribe(resp => {
      this.notifications.toggleNotification();
      this.notifyService.getMessage('update', 'Password sucesfully updated');
      setTimeout(() => {
        this.notifications.toggleNotification();
      }, 2000);
      this.authService.checkToken().subscribe(resp => console.log(resp))

    }, (error) => {
      if(error.error.message === "The password is not correct") {
        this.notifyService.getMessage('wuops', 'The current password is not correct')
      } else {
        this.notifyService.getMessage('wuops', 'The passwords doesnt match one with each other')
      }
      this.notifications.toggleNotification();
      setTimeout(() => {
        this.notifications.toggleNotification();
      }, 2000);

    })

    

  }


}
