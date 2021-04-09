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
    this.getWorkspaces();
  }
  
  ngOnInit(): void {
  }

  getWorkspaces(){
    this.managerAppService.getWorkspace().subscribe((resp:WorkspaceResponse )=> {
      this.managerAppService._workspaces = resp.workspace;
      // console.log(resp.workspace)
    }, (err:any) => {
      console.log(err)
    });
  }
}
