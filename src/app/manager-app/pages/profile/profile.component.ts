import { Component, OnInit } from '@angular/core';
import { ManagerAppService } from '../../services/manager-app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  get userData () {
    return this.managerAppService._authenticatedUser;
  }
  constructor(private managerAppService:ManagerAppService) { }

  ngOnInit(): void {
  }

}
