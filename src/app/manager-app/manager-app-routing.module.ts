import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WorkspaceAddComponent } from './pages/workspace-add/workspace-add.component';
import { WorkspaceViewComponent } from './pages/workspace-view/workspace-view.component';
import { WorkspacesAllComponent } from './pages/workspaces-all/workspaces-all.component';

const routes: Routes = [
  {
    path: 'manager-app', component: DashboardComponent,

    children: [
      {path: 'home', component: HomeComponent,
      children: [
        {path: '', component: WorkspacesAllComponent},
        {path: 'workspaces', component: WorkspacesAllComponent},
        {path: 'search', component: SearchComponent},
        {path: 'add', component: WorkspaceAddComponent}
      ]
    },
      {path: 'workspace/:id', component: WorkspaceViewComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
      {path: '**', redirectTo: 'manager-app/home'}

    ],
  },
  {path: '**', redirectTo: 'manager-app/home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerAppRoutingModule { }
