import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsComponent } from 'src/app/shared/notifications/notifications.component';
import { WorkspaceResponse } from '../../manager-interfaces/managerApp.interface';
import { ManagerAppService } from '../../services/manager-app.service';
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'app-workspace-add',
  templateUrl: './workspace-add.component.html',
  styleUrls: ['./workspace-add.component.scss']
})
export class WorkspaceAddComponent implements OnInit {
  @ViewChild('themeOptions') themeCard!:ElementRef<HTMLDivElement>;

  //THEME CONTAINS THE URL FROM CLOUDINARY
  private DEFAULT_THEME: string = 'https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284918/iksgsorgjrltr65cs8gq.jpg';
  private DEFAULT_THEME_ID: string = 'iksgsorgjrltr65cs8gq';

  public theme!: string;

  workspaceForm:FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    theme: [this.theme]
  })

  constructor(private fb:FormBuilder, 
    private managerAppService:ManagerAppService, 
    private activatedRoute:Router, 
    private notifyService: NotifyService, 
    private notification: NotificationsComponent) { }


  ngOnInit(): void {
    this.setTheme(this.DEFAULT_THEME);
    this.setOutline(this.DEFAULT_THEME_ID);
  }


  isInvalid(input: string){
    // console.log(this.workspaceForm.controls[input].errors)
    return !this.workspaceForm.controls[input].pristine && 
            this.workspaceForm.controls[input].errors && 
            this.workspaceForm.controls[input].touched
  }


  sendForm() {

    if(this.workspaceForm.invalid) {
      this.workspaceForm.markAllAsTouched()
      return;
    }

    this.managerAppService.createWorkspace(this.workspaceForm.value)
      .subscribe((resp:WorkspaceResponse) => {
        if(resp.status === 'success') {
          this.managerAppService._workspaces = [...this.managerAppService._workspaces, resp.workspace[resp.workspace.length -1]]
          this.notifyService.getMessage('create');
          this.notification.toggleNotification();
          setTimeout(() => {
            this.activatedRoute.navigateByUrl('/v2/manager-app/home/workspaces')
          }, 1500);
        } 
    }, (error) => {
      //TODO: Send error to the notification factory
      console.log(error)
    })

    this.workspaceForm.setValue({
      title: '',
      theme: 'patata defecto'
    })
    this.workspaceForm.markAsUntouched();
  }

  
  setTheme(val?:string, cardId?:string){
    if(!val) {
      this.workspaceForm.setValue({title: this.workspaceForm.value.title ,theme: this.DEFAULT_THEME})
    } else {
      this.workspaceForm.setValue({title: this.workspaceForm.value.title, theme: val});
    }
    this.setOutline(cardId);
  }

  setOutline(cardId:string | undefined) {
    const cardCollection = document.querySelectorAll('.workspace-card')! as NodeListOf<HTMLDivElement>;
    cardCollection.forEach((el) => {
      el.classList.remove('selectedCard');
      if(el.id === cardId) {
       return el.classList.add('selectedCard');
      }
    })
  }
}
