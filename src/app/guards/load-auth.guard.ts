import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { ManagerAppService } from '../manager-app/services/manager-app.service';

@Injectable({
  providedIn: 'root'
})
export class LoadAuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private managerAppService: ManagerAppService ) {

  }
  canActivate(): Observable<boolean> | boolean  {
    if(!this.managerAppService._authenticatedUser) {
      return true;
    }
    if(localStorage.getItem('bearer-todo') === 'logout') {

      return true;
    } else {
      return false;
    }

  }
  canLoad(): Observable<boolean> | boolean  {

    if(!this.managerAppService._authenticatedUser) {
      return true;
    }
    if(localStorage.getItem('bearer-todo') === 'logout') {

      return true;
    } else {
      return false;
    }
  
  }
}