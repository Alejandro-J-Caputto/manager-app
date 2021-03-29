import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: 'v2',
    loadChildren: () => import('./manager-app/manager-app-routing.module').then(module => module.ManagerAppRoutingModule)
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