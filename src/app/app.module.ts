import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ManagerAppModule } from './manager-app/manager-app.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NotificationsComponent } from './shared/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ManagerAppModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    DragDropModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
