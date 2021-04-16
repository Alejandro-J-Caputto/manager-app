import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginForm, LoginResponse, RegisterForm, RegisterResponse, User } from '../authInterfaces/auth.interface';
import { ManagerAppService } from 'src/app/manager-app/services/manager-app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //TODO. Set url in enviroment.ts
  private apiUrl: string = 'https://manager-app-v2.herokuapp.com/api/todoapp/v1/auth';
  public _user!: User;
  get user () {
    return {...this._user}
  }
  
  constructor(private http:HttpClient, private router: Router, private managerAppService: ManagerAppService) {

   }


   authLogin(form:LoginForm):Observable<LoginResponse>{
    const url = `${this.apiUrl}/login`
    return this.http.post<LoginResponse>(url, form);
   }

   authRegister(form:RegisterForm):Observable<RegisterResponse>{
    const url = `${this.apiUrl}/register`;
    return this.http.post<RegisterResponse>(url, form);
   }

   authLogOut(): void {
    // Change token to 'logout' 
    localStorage.setItem('bearer-todo', 'logout');
    localStorage.removeItem('work-active')
    this.managerAppService._workspaces = [];
    // Clean the headers to avoid unwanted requests. 
    const headers = new HttpHeaders()
      .set('Authorization', `${localStorage.getItem('bearer-todo')}`);
    this.managerAppService.headers = headers;
    this.managerAppService.token = 'logout';
    this.checkToken().subscribe(resp => console.log(resp))
    this.router.navigate(['/auth/login'])
   }

   //Api request for token validation
   checkToken():Observable<LoginResponse>{
    const url = `${this.apiUrl}/checkToken`
    const token = `${!this.managerAppService.token ? `${localStorage.getItem('bearer-todo')}` : this.managerAppService.token}`
    const headers = new HttpHeaders()
      .set('Authorization', token);
    this.managerAppService.headers = !this.managerAppService.headers ? headers : this.managerAppService.headers;
    return this.http.get<LoginResponse>(url, {headers})
   }

}
