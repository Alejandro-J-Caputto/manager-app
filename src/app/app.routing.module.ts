import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessAppGuard } from './guards/access-app.guard';
import { LoadAuthGuard } from './guards/load-auth.guard';


const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule),
    canActivate: [LoadAuthGuard],
    canLoad: [LoadAuthGuard]
  },
  {
    path: 'v2',
    loadChildren: () => import('./manager-app/manager-app-routing.module').then(module => module.ManagerAppRoutingModule),
    canActivate: [AccessAppGuard],
    canLoad: [AccessAppGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }