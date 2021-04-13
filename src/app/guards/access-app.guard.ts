import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
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
      this.managerAppService._authenticatedUser = resp.user;
      if(resp.status === 'success'){
        

        // console.log(this.managerAppService._authenticatedUser)
        // console.log(this.managerAppService.token)
        return true;
      } else {
        return false
      }
    }))

  }
  canLoad(): Observable<boolean> | boolean  {
    return this.authService.checkToken().pipe(map( (resp:LoginResponse) => {
      this.managerAppService._authenticatedUser = resp.user;
      if(resp.status === 'success'){
        
        return true;
      } else {
        return false;
      }
    }))

}
}
