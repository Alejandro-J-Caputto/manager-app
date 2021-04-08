import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NewTodoList, TodoListResponse, TodoLists, User, Workspace, WorkspaceResponse } from '../manager-interfaces/managerApp.interface';
import { Observable } from 'rxjs';
import { RegisterForm, UpdatedUserResponse } from 'src/app/auth/authInterfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class ManagerAppService {

  // public theme!: string;
  public _authenticatedUser!:User;

  public _workspaces:Workspace[] = [];

  public globaltodoListTest:TodoLists[] | NewTodoList [] = [];

  //TOKEN FROM LOCALSTORAGE PREVIOUSLY STORED AT AUTH PROCESS 
  private apiUrl: string = 'http://localhost:8000/api/todoapp/v1';

  public token!: string;

  // private headers!:HttpHeaders;
  // public get tokenChange() {
  //   return this.token
  // }
  public headers!:HttpHeaders;
  // private headers:HttpHeaders = new HttpHeaders().set('Authorization', this.token);
  
  public isRendered: boolean = false;

  constructor(private http: HttpClient) {

    // this.setToken(`Bearer ${localStorage.getItem('bearer-todo')}`);
    console.log(this._authenticatedUser)
    console.log(this.token)

  }

  // setToken(newToken:string) :void {
  //   if( !this.token) {
  //     this.token = newToken;
  //     this.headers = new HttpHeaders().set('Authorization', `'Bearer'${this.token}`);

  //   }
  // }

  //Get all the workspaces current user
  getWorkspace(idUser:string):Observable<WorkspaceResponse> {
    const url = `${this.apiUrl}/workspace`
    // this.headers.set('Authorization', idUser);
    const headers = new HttpHeaders()
      .set('Authorization', idUser)
        // return this.http.get<WorkspaceResponse>(url, {headers})
      

        return this.http.get<WorkspaceResponse>(url, {headers})
    
  }

  //Creates a workpacee at Sidebar.component
  createWorkspace(form: {title: string, theme?: string}):Observable<any>{
    console.log(form)
    const body = {
      title: form.title,
      img: form.theme
    }
    // console.log(this.headers)

    const headers = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(`${this.apiUrl}/workspace`, body, {headers:headers});
  }

  getTodoListsByWorkspaceId(id:string):Observable<TodoListResponse> {
    //TODO. Must check the user first
    const url = `${this.apiUrl}/todoList/${id}`;
    return this.http.get<TodoListResponse>(url);
  }
  getTodoListsByWorkspaceBoard(id:string):Observable<TodoListResponse> {
    //TODO. Must check the user first
    const url = `${this.apiUrl}/${id}/todoList/${id}`;
    return this.http.get<TodoListResponse>(url);
  }

  createTodoList(nameTodoList:string, id: string ):Observable<any>{
    const url = `${this.apiUrl}/todoList`
    const body = {
      name: nameTodoList,
      project: id
    }
    return this.http.post(url, body, {headers:this.headers})
  }

  patchTodoListName(newName:string, id:string):Observable<any> {
    const url = `${this.apiUrl}/todoList/${id}`
    const body = {
      name: newName
    }
    return this.http.patch(url, body, {headers:this.headers});
  }

  deleteTodoListByID(id:string):Observable<any>{
    const url = `${this.apiUrl}/todoList/${id}`;
    return this.http.delete(url,{headers:this.headers});
  }



  createTodo(todo:string, todoListId:string):Observable<any>{
    const url = `${this.apiUrl}/todo`
    const body = {
      todo: todo,
      todoList: todoListId
    }
    return this.http.post(url, body, {headers:this.headers});
  }


  //TOGGLE TODO STATUS 

  changeIsDoneTodo(id:string):Observable<any> {
    const url = `${this.apiUrl}/todo/isDone/${id}`
    return this.http.get(url,{headers:this.headers});
  }
  //UPDATES A TODO
  patchTodo(val:string, id:string):Observable<any> {
    const url = `${this.apiUrl}/todo/${id}`
    const body = {
      todo: val
    }
    return this.http.patch(url, body, {headers:this.headers});
  }

  //DRAG DROP TODO

  dragDropTodo(idTodo:string, idTodoList:string) {
    const url = `${this.apiUrl}/todo/${idTodo}/${idTodoList}`
    return this.http.patch(url,null, {headers: this.headers})
  }

  //UPDATE USER FIELDS
  patchUserData(form:RegisterForm):Observable<UpdatedUserResponse> {
    console.log(this._authenticatedUser)
    console.log(this.headers)
    console.log(form)
    const url = `${this.apiUrl}/users`
    return this.http.patch<UpdatedUserResponse>(url, form, {headers: this.headers})
  }

  //UPDATE PICTURE
  patchProfileImg(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name)
    const url = `${this.apiUrl}/upload/users`;
    return this.http.post(url, formData, {headers: this.headers})

  }

  //RESET PASSWORD 
  resetUserPass(form: {password: string, passwordReset: string, passwordConfirm: string}) {
    const url =`${this.apiUrl}/users/resetPass`;
    console.log(form)
  

    return this.http.patch(url, form, {headers: this.headers});
  }

  // onTheme(val: string) {
  //   this.theme = val;
  // }


  
}
