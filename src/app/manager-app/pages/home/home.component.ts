import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WorkspaceResponse } from '../../manager-interfaces/managerApp.interface';
import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public inputFlag!: boolean;


  constructor() {}

  ngOnInit(): void {
  }
  

}
