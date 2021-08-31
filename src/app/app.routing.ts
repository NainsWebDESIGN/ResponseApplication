import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterIDComponent } from '@app/routerID/routerID.component';

const routes: Routes = [
  { path: '', redirectTo: '/rou/測試1', pathMatch: 'full' },
  { path: 'rou/:data', component: RouterIDComponent },
  { path: '**', redirectTo: '/rou/測試1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoute { }