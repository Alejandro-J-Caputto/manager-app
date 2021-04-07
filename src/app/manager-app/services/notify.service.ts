import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  public text: string = '';
  public icon: string = '';

  constructor() { }
  

  getMessage( action: 'registration' | 'login' | 'delete' | 'loading' | 'wuops' | 'searching') {

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
      
      case 'loading':
          this.text = 'Succesfully registered';
          this.icon = 'fas fa-sync fa-spin'
        break;
      
      case 'wuops':
          this.text = 'There was a problem';
          this.icon = 'fas fa-exclamation-circle'
        break;
      
      case 'registration':
          this.text = 'Searching';
          this.icon = 'fas fa-spinner fa-pulse'
        break;
      
      default:
        break;
    }
  
  }

}
