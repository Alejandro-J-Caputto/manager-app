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

  public searching:boolean = false;
  public notMatch:boolean = false;

  get workspaces(){
    return this.managerAppService._workspaces;
  }
  get filteredWorkspaces() {
    return [...this.workspaces];} 
  set filteredWorkspaces(val) {

  }
  @ViewChild('refModal') modal!:ElementRef<HTMLDivElement>;
  @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>;

  constructor(private managerAppService: ManagerAppService, private workspaceAll: WorkspacesAllComponent) {

    // this.checkWorkspaces();
  }

  ngOnInit(): void {
  }

   search(val: string):void {

    const query = val.trim().toLowerCase();
    this.notMatch = false;
    this.searching = true;
    this.filteredWorkspaces = this.workspaces.filter(el => el.title.toLowerCase().includes(query))
    if(this.searchInput.nativeElement.value === '') {
      this.filteredWorkspaces = this.workspaces;
    }
    setTimeout(() => {
      this.searching = false;
    }, 1000);

    if(!this.filteredWorkspaces.length) {
      this.notMatch = true;
    }
  }
  checkWorkspaces() {
    if(!this.workspaces.length) {
     this.managerAppService.getWorkspace(`Bearer ${localStorage.getItem('bearer-todo')}`).subscribe((resp:WorkspaceResponse) => {
       console.log(resp)
      this.managerAppService._workspaces = [...resp.workspace];
     } )
    }
  }
  
}
