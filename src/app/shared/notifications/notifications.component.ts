import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NotifyService } from 'src/app/manager-app/services/notify.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit{  

  get text () {
    return this.notifyService.text;
  }

  get icon () {
    return this.notifyService.icon;
  }



  constructor(private notifyService: NotifyService) { }

  ngOnInit(): void {
    

  }

  

  toggleNotification() {
    console.log('me dispare')
    // this.notify.nativeElement.classList.toggle('notification--hidden');
    const notification = document.querySelector('.notification');
    notification?.classList.toggle('notification--hidden');
  }

}
