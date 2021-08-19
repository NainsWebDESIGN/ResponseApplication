import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterIDComponent } from './RouterID/RouterID.component';


const routes: Routes = [
  { path: '', redirectTo: '/rou/123', pathMatch: 'full' },
  { path: 'rou/:id', component: RouterIDComponent },
  { path: '**', redirectTo: '/rou/123', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoute { }