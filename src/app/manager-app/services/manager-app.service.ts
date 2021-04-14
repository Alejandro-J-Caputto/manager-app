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
  private apiUrl: string = 'https://manager-app-v2.herokuapp.com/api/todoapp/v1';

  public token!: string;

  public headers!:HttpHeaders;
  // private headers:HttpHeaders = new HttpHeaders().set('Authorization', this.token);
  
  public isRendered: boolean = false;
  public workspaceName!: string;

  constructor(private http: HttpClient) { }


  //Get all the workspaces current user
  getWorkspace():Observable<WorkspaceResponse> {
    const url = `${this.apiUrl}/workspace`
        return this.http.get<WorkspaceResponse>(url, {headers:this.headers})
    }

  //Creates a workpacee at Sidebar.component
  createWorkspace(form: {title: string, theme?: string}):Observable<any>{
    // console.log(form)
    const body = {
      title: form.title,
      img: form.theme
    }
    return this.http.post(`${this.apiUrl}/workspace`, body, {headers:this.headers});
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

}
