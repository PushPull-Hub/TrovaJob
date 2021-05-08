import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './Guards/authenticated.guard';
import { UnauthenticatedGuard } from './Guards/unauthenticated.guard';

const routes: Routes = [
  {
    path: 'authentication',
    canActivate: [UnauthenticatedGuard],
    loadChildren: () =>
      import('./components/unauthenticated/unauthenticated.module').then(
        (m) => m.UnauthenticatedModule
      ),
  },
  {
    path: 'home',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./components/authenticated/authenticated.module').then(
        (m) => m.AuthenticatedModule
      ),
  },
  { path: '', redirectTo: 'authentication/welcome-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
