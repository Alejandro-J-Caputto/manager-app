import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerAppRoutingModule } from './manager-app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { WorkspaceViewComponent } from './pages/workspace-view/workspace-view.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { WorkspacesAllComponent } from './pages/workspaces-all/workspaces-all.component';
import { SharedModule } from '../shared/shared.module';
import { TodolistCardComponent } from './components/todolist-card/todolist-card.component';


@NgModule({
  declarations: [DashboardComponent, WorkspaceViewComponent, ProfileComponent, SettingsComponent, NotFoundComponent, HomeComponent, SearchComponent, WorkspacesAllComponent, TodolistCardComponent],
  imports: [
    CommonModule,
    ManagerAppRoutingModule,
    SharedModule
  ],
  exports: [
    DashboardComponent, WorkspaceViewComponent, ProfileComponent, SettingsComponent, NotFoundComponent, HomeComponent, SearchComponent, WorkspacesAllComponent
  ]
})
export class ManagerAppModule { }
