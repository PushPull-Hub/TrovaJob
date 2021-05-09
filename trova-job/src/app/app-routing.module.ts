import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './Guards/authenticated.guard';
import { UnauthenticatedGuard } from './Guards/unauthenticated.guard';

const routes: Routes = [
  {
    path: 'authentication',
    canActivate: [UnauthenticatedGuard],
    loadChildren: () =>
      import('./components/unauthenticated-module/unauthenticated.module').then(
        (m) => m.UnauthenticatedModule
      ),
  },
  {
    path: 'home',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./components/authenticated-module/authenticated.module').then(
        (m) => m.AuthenticatedModule
      ),
  },
  { path: '', redirectTo: 'home/find-jobs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
