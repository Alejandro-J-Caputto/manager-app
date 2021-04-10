import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  public text: string = '';
  public icon: string = '';

  constructor() { }
  

  getMessage( action: 'registration' | 'login' | 'delete' | 'loading' | 'wuops' | 'searching' | 'create' | 'update', text?:string) {

    switch (action) {
      case 'registration':
        console.log(this.text)
          this.text = 'Succesfully registered';
          this.icon = 'far fa-check-circle'
          console.log(this.text)
          console.log(this.icon)
          return
      
      
      case 'login':
          this.text = 'Succesfully Logged In';
          this.icon = 'far fa-check-circle'
        break;

      case 'update':
          this.text = `${text ? text : 'Succesfully Logged In'}`;
          this.icon = 'far fa-check-circle'
        break;
      
      case 'loading':
          this.text = `${text ? text : 'Activating Super Security!!'}`;
          this.icon = 'fas fa-sync fa-spin'
        break;
      
      case 'wuops':
          this.text = `${text ? text : 'there was a problem'}`;
          this.icon = 'fas fa-exclamation-circle'
        break;
      
      case 'registration':
          this.text = 'Searching';
          this.icon = 'fas fa-spinner fa-pulse'
        break;
      case 'create':
          this.text = 'Workspace sucesfully created!';
          this.icon = 'far fa-check-circle'
        break;
      
      default:
        break;
    }
  
  }

}
