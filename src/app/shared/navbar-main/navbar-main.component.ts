import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ManagerAppService } from 'src/app/manager-app/services/manager-app.service';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit, OnDestroy {
  get isRendered () {
    return this.managerAppService.isRendered;
  }
  get workSpaceName() {
    return this.managerAppService.workspaceName;
  }
  //TODO. If the app is reloaded, make a request to fetch the user. 
  get userData() {
    return this.managerAppService._authenticatedUser;
  }
  // public inputFlag: boolean = false
  // get workspaces() {
  //   return this.managerAppService._workspaces;
  // }
 
  constructor(private authService: AuthService, private managerAppService: ManagerAppService) {
   
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void{
    
  }

  logout(){
    this.authService.authLogOut();
  }



}
