import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkspaceResponse } from '../../manager-interfaces/managerApp.interface';
import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-workspaces-all',
  templateUrl: './workspaces-all.component.html',
  styleUrls: ['./workspaces-all.component.scss']
})
export class WorkspacesAllComponent implements OnInit {

  get user(){
    return this.managerAppService._authenticatedUser;
  }

  get userId() {
    return this.managerAppService._authenticatedUser._id;
  }
  get workspaces(){
    return this.managerAppService._workspaces;
  }

  constructor(private managerAppService: ManagerAppService) { 
    // this.managerAppService.token = `Bearer ${localStorage.getItem('bearer-todo')}`;
    console.log(this.managerAppService.token)
    this.getWorkspaces(this.managerAppService.token);

  }
  
  ngOnInit(): void {
  }

  getWorkspaces(token:string){
    this.managerAppService.getWorkspace(token).subscribe((resp:WorkspaceResponse )=> {
      this.managerAppService._workspaces = resp.workspace;
    }, (err:any) => {
      console.log(err)
    });
  }
}
