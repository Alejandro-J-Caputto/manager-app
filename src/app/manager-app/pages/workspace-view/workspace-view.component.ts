import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListResponse } from '../../manager-interfaces/managerApp.interface';
import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-workspace-view',
  templateUrl: './workspace-view.component.html',
  styleUrls: ['./workspace-view.component.scss']
})
export class WorkspaceViewComponent implements OnInit {
  private workspaceID!:string;
  public get todoLists() {
    return [...this.managerAppService.globaltodoListTest];
  }

  constructor( private managerAppService:ManagerAppService,private router:Router, private activatedRoute: ActivatedRoute) {
    this.getParam();
    this.getTodoList();
   }

  ngOnInit(): void {
  }
  getParam(){
    this.activatedRoute.params.subscribe(params => {
      this.workspaceID = params.id;
    })
  }

  getTodoList(){
    this.managerAppService.getTodoListsByWorkspaceId(this.workspaceID).subscribe(resp => {
      // this.todoLists = resp.todoList;
      this.managerAppService.globaltodoListTest = resp.todoList;
    })
  }
  // addTodoList(val){

  // }
  addNewTodoList(val:string){
    this.managerAppService.createTodoList(val, this.workspaceID).subscribe( (resp:TodoListResponse)=> {
      this.managerAppService.globaltodoListTest = [...this.managerAppService.globaltodoListTest, resp.newTodoList];
    } )
  }

  


}
