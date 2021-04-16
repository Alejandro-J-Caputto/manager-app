import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoListResponse } from '../../manager-interfaces/managerApp.interface';
import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-workspace-view',
  templateUrl: './workspace-view.component.html',
  styleUrls: ['./workspace-view.component.scss']
})
export class WorkspaceViewComponent implements OnInit, OnDestroy {

  private workspaceID!:string;
  
  public theme!: string;
  public get todoLists() {
    return [...this.managerAppService.globaltodoListTest];
  }

  @ViewChild('inputToDoList') inputTodoList!:ElementRef<HTMLInputElement>;
  constructor( private managerAppService:ManagerAppService,private router:Router, private activatedRoute: ActivatedRoute) {
    this.getParam();
    this.getTodoList();
    this.getTheme();
    this.setNavbarLink();
   }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.setNavbarLink();
    this.setNameWorkspace('');
  }
  getParam(){
    this.activatedRoute.params.subscribe(params => {
      this.workspaceID = params.id;
    })
  }
  getTheme() {
    if(this.managerAppService._workspaces.length) {
      const filterTheme = [...this.managerAppService._workspaces].filter(el => el._id === this.workspaceID);
      // console.log(filterTheme[0].img);
      this.theme = filterTheme[0].img;
      localStorage.setItem('theme', this.theme);
      
    } else {
      this.theme = localStorage.getItem('theme')!;
    }
    // console.log(this.theme)
  }

  getTodoList(){
    this.managerAppService.getTodoListsByWorkspaceId(this.workspaceID).subscribe(resp => {
      // this.todoLists = resp.todoList;
      
      this.managerAppService.globaltodoListTest = resp.todoList;
    }, (error) => {
      console.log(error)
    })
  }

  addNewTodoList(val:string){
    this.managerAppService.createTodoList(val, this.workspaceID).subscribe( (resp:TodoListResponse)=> {
      this.managerAppService.globaltodoListTest = [...this.managerAppService.globaltodoListTest, resp.newTodoList];
    } )
    this.inputTodoList.nativeElement.value = ''
  }

  setNavbarLink() {
    this.managerAppService.isRendered = 
      !this.managerAppService.isRendered ? 
      this.managerAppService.isRendered = true : 
      this.managerAppService.isRendered = false;
  }
  setNameWorkspace(name: string) {
    this.managerAppService.workspaceName = name;
  }
  styles() {
    return {
      'background-image': 'url('+ this.theme +')',
      'background-size': 'cover',
      'background-position': 'top',
      // 'background-repeat': 'repeat'
    }
  }

}
