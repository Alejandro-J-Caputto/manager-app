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
  public _user!: User;
  // public _token: string = `${localStorage.getItem('bearer-todo') === 'logout' ? 'logout' : `Bearer ${localStorage.getItem('bearer-todo')}`}`;
  get user () {
    return {...this._user}
  }
  
  
  // private token: string = `Bearer ${localStorage.getItem('bearer-todo')}`
  private apiUrl: string = 'https://manager-app-v2.herokuapp.com/api/todoapp/v1/auth';
  
  constructor(private http:HttpClient, private router: Router, private managerAppService: ManagerAppService) {

   }


   authLogin(form:LoginForm){
    
    const url = `${this.apiUrl}/login`
    return this.http.post<LoginResponse>(url, form);

   }
   authRegister(form:RegisterForm):Observable<RegisterResponse>{
    const url = `${this.apiUrl}/register`;
    return this.http.post<RegisterResponse>(url, form);
   }

   authLogOut(){
    localStorage.setItem('bearer-todo', 'logout');
    localStorage.removeItem('work-active')
    // this.managerAppService.token = '';
    this.managerAppService._workspaces = [];
    this.router.navigate(['/auth/login'])
   }

   checkToken():Observable<LoginResponse>{
    const url = `${this.apiUrl}/checkToken`
    // const token = `Bearer ${localStorage.getItem('bearer-todo')}`
    const token = `${!this.managerAppService.token ? `${localStorage.getItem('bearer-todo')}` : this.managerAppService.token}`
    // console.log(token)
    const headers = new HttpHeaders()
      .set('Authorization', token);
    this.managerAppService.headers = !this.managerAppService.headers ? headers : this.managerAppService.headers;
    return this.http.get<LoginResponse>(url, {headers})
   }

}