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

  get user () {
    return {...this._user}
  }
  
  
  // private token: string = `Bearer ${localStorage.getItem('bearer-todo')}`
  private apiUrl: string = 'http://localhost:8000/api/todoapp/v1/auth';
  
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
    const token = `Bearer ${localStorage.getItem('bearer-todo')}`
    const headers = new HttpHeaders()
      .set('Authorization', token);
    return this.http.get<LoginResponse>(url, {headers})
   }

}
