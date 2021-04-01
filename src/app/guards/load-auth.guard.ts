import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoadAuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService ) {

  }
  canActivate(): Observable<boolean> | boolean  {

    if(localStorage.getItem('bearer-todo') === 'logout') {

      return true;
    } else if(!localStorage.getItem('bearer-todo')) {
      return true;
    } else {
      return false;
    }
  

  }
  canLoad(): Observable<boolean> | boolean  {
    if(localStorage.getItem('bearer-todo') === 'logout') {

      return true;
    } else if(!localStorage.getItem('bearer-todo')) {
      return true;
    } else {
      return false;
    }
    
}
}