import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ManagerAppService } from '../../services/manager-app.service';

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
  public filteredWorkspaces = [...this.workspaces];

  @ViewChild('refModal') modal!:ElementRef<HTMLDivElement>;
  @ViewChild('searchInput') searchInput!:ElementRef<HTMLInputElement>;

  constructor(private managerAppService: ManagerAppService) {
    console.log(this.filteredWorkspaces)
  }

  ngOnInit(): void {
  }

  search(val: string): void {

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
  
}
