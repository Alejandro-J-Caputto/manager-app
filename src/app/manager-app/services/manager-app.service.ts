import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TodoListResponse, TodoLists, User, Workspace, WorkspaceResponse } from '../manager-interfaces/managerApp.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerAppService {
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
  createWorkspace(title:string):Observable<any>{
    const body = {
      title
    }
    // const headers = new HttpHeaders().set('Authorization', this.token);
    return this.http.post(`${this.apiUrl}/workspace`, body, {headers:this.headers});
  }

  getTodoListsByWorkspaceId(id:string):Observable<TodoListResponse> {
    //TODO. Must check the user first
    const url = `${this.apiUrl}/todoList/${id}`;
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





  
}
