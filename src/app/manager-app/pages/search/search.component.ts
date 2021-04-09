import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkspaceResponse } from '../../manager-interfaces/managerApp.interface';
import { ManagerAppService } from '../../services/manager-app.service';
import { WorkspacesAllComponent } from '../workspaces-all/workspaces-all.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  get workspaces(){
    return this.managerAppService._workspaces;
  }
  public searching:boolean = false;
  public notMatch:boolean = false;
  public filteredWorkspaces =  this.workspaces

  @ViewChild('refModal') modal!:ElementRef<HTMLDivElement>;
  @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>;

  constructor(private managerAppService: ManagerAppService, private workspaceAll: WorkspacesAllComponent) {
    this.workspaceAll.getWorkspaces();
    // this.managerAppService.setWorkspace(this.workspaceAll.workspaces);
  }

  ngOnInit(): void {
  }
   search(val: string):void {

    const query = val.trim().toLowerCase();

    console.log(query)
    this.notMatch = false;
    this.searching = true;
    this.filteredWorkspaces = this.workspaces.filter(el => el.title.toLowerCase().includes(query))
    console.log(this.filteredWorkspaces)
    if(this.searchInput.nativeElement.value === '') {
      this.filteredWorkspaces = this.workspaces;
    } else {
      this.filteredWorkspaces;
    }
    setTimeout(() => {
      this.searching = false;
    }, 1000);

    if(!this.filteredWorkspaces.length) {
      this.notMatch = true;
    }
  }
  
  
}
