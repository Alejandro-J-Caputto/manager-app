import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { WorkspaceAddComponent } from './pages/workspace-add/workspace-add.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [DashboardComponent, WorkspaceViewComponent, ProfileComponent, SettingsComponent, NotFoundComponent, HomeComponent, SearchComponent, WorkspacesAllComponent, TodolistCardComponent, WorkspaceAddComponent],
  imports: [
    CommonModule,
    ManagerAppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  exports: [
    DashboardComponent, WorkspaceViewComponent, ProfileComponent, SettingsComponent, NotFoundComponent, HomeComponent, SearchComponent, WorkspacesAllComponent
  ],
  providers: [WorkspaceViewComponent, WorkspacesAllComponent]
})
export class ManagerAppModule { }
