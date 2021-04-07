import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [NavbarMainComponent, FooterComponent, ModalComponent, NotificationsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [NotificationsComponent],
  exports: [NavbarMainComponent, FooterComponent,ModalComponent, NotificationsComponent]
})
export class SharedModule { }
