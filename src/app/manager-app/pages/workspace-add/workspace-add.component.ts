import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  public theme!: string;


  workspaceForm:FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    theme: [this.theme]
  })

  //THEME HOLDS THE URL FROM CLOUDINARY


  constructor(private fb:FormBuilder, private managerAppService:ManagerAppService, private activatedRoute:Router, private notifyService: NotifyService, private notification: NotificationsComponent) { }


  ngOnInit(): void {
  }
  sendForm() {
    console.log(this.workspaceForm);
    if(this.workspaceForm.invalid) {
      this.workspaceForm.markAllAsTouched()
      return;
    }
    this.managerAppService.createWorkspace(this.workspaceForm.value).subscribe((resp:WorkspaceResponse) => {

      if(resp.status === 'success') {
       
          this.managerAppService._workspaces = [...this.managerAppService._workspaces, resp.workspace[resp.workspace.length -1]]
          this.notifyService.getMessage('create');
          this.notification.toggleNotification();
          setTimeout(() => {
            
            this.activatedRoute.navigateByUrl('/v2/manager-app/home/workspaces')
          }, 1500);
        }

      
    }, (error) => {
      console.log(error)
    } )

    this.workspaceForm.setValue({
      title: '',
      theme: 'patata defecto'
    })
    this.workspaceForm.markAsUntouched();
  }
  isInvalid(input: string){
    return this.workspaceForm.controls[input].errors 
            && this.workspaceForm.controls[input].touched
  }
  setTheme(val?:string, cardId?:string){
    if(!val) {
      this.workspaceForm.setValue({title: this.workspaceForm.value.title ,theme: 'https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284918/iksgsorgjrltr65cs8gq.jpg'})
    } else {
      this.workspaceForm.setValue({title: this.workspaceForm.value.title, theme: val});
    }
    this.setOutline(cardId);
  }

  setOutline(cardId:string | undefined) {
    const cardCollection = document.querySelectorAll('.workspace-card')!;
    cardCollection.forEach((el) => {
      console.log('hello')

      el.classList.remove('selectedCard');
      if(el.id === cardId) {
        console.log(el.id)
       return el.classList.add('selectedCard');
      }
    })


  }
}
