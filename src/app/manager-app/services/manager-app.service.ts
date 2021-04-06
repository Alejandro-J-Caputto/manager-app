import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TodoListResponse, TodoLists, User, Workspace, WorkspaceResponse } from '../manager-interfaces/managerApp.interface';
import { Observable } from 'rxjs';
import { Form, FormGroup } from '@angular/forms';
import { RegisterForm, UpdatedUserResponse } from 'src/app/auth/authInterfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class ManagerAppService {

  // public theme!: string;
  public _authenticatedUser!:User;

  public _workspaces:Workspace[] = [];

  public globaltodoListTest:TodoLists[] = [];

  //TOKEN FROM LOCALSTORAGE PREVIOUSLY STORED AT AUTH PROCESS 
  private apiUrl: string = 'http://localhost:8000/api/todoapp/v1';

  private token: string = `Bearer ${localStorage.getItem('bearer-todo')}`;

  private headers:HttpHeaders = new HttpHeaders().set('Authorization', this.token);

  constructor(private http: HttpClient) {}
  //Get all the workspaces current user
  getWorkspace(idUser:string):Observable<WorkspaceResponse> | any {
    const url = `${this.apiUrl}/workspace`
    // this.headers.set('Authorization', idUser);
    const headers = new HttpHeaders()
      .set('Authorization', idUser)
        // return this.http.get<WorkspaceResponse>(url, {headers})
      if(this.token){

        return this.http.get<WorkspaceResponse>(url, {headers})
      } 
  }

  //Creates a workpacee at Sidebar.component
  createWorkspace(form: {title: string, theme?: string}):Observable<any>{
    console.log(form)
    const body = {
      title: form.title,
      img: form.theme
    }
    // const headers = new HttpHeaders().set('Authorization', this.token);
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

  changeIsDoneTodo(id:string):Observable<any> {
    const url = `${this.apiUrl}/todo/isDone/${id}`
    return this.http.get(url,{headers:this.headers});
  }

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

  patchUserData(form:RegisterForm):Observable<UpdatedUserResponse> {
    const url = `${this.apiUrl}/users`
    return this.http.patch<UpdatedUserResponse>(url, form, {headers: this.headers})
  }


  patchProfileImg(file: File) {
    const formData = new FormData();
    console.log(file)
    formData.append('file', file, file.name)
    const url = `${this.apiUrl}/upload/users`;
    return this.http.post(url, formData, {headers: this.headers})

  }
  // onTheme(val: string) {
  //   this.theme = val;
  // }


  
}
