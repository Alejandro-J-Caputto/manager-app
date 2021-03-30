import { Component, Input, OnInit } from '@angular/core';
import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-workspaces-all',
  templateUrl: './workspaces-all.component.html',
  styleUrls: ['./workspaces-all.component.scss']
})
export class WorkspacesAllComponent implements OnInit {

  get workspaces(){
    return this.managerAppService._workspaces;
  }


  constructor(private managerAppService: ManagerAppService) { }

  ngOnInit(): void {
  }

}
