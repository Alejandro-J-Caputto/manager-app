import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LoginResponse } from '../auth/authInterfaces/auth.interface';

import { AuthService } from '../auth/services/auth.service';
import { ManagerAppService } from '../manager-app/services/manager-app.service';

@Injectable({
  providedIn: 'root'
})
export class AccessAppGuard implements CanActivate, CanLoad {
  constructor(private authService:AuthService, private managerAppService: ManagerAppService){
    
  }
  canActivate(): Observable<boolean> | boolean  {

    return this.authService.checkToken().pipe(map( (resp:LoginResponse) => {
      if(resp.status === 'success'){
        this.managerAppService._authenticatedUser = resp.user;
        // console.log(this.managerAppService.token)
        return true;
      } else {
        return false
      }
    }))

  }
  canLoad(): Observable<boolean> | boolean  {
    return this.authService.checkToken().pipe(map( (resp:LoginResponse) => {
      if(resp.status === 'success'){
        this.managerAppService._authenticatedUser = resp.user;
        return true;
      } else {
        return false;
      }
    }))

}
}
