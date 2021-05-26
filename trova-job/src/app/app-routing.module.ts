import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopComponent } from './develop/develop/develop.component';
import { TestAppComponent } from './develop/test-app/test-app.component';
import { AdminGuard } from './Guards/admin.guard';
import { AuthenticatedGuard } from './Guards/authenticated.guard';
import { UnauthenticatedGuard } from './Guards/unauthenticated.guard';

const routes: Routes = [
  { path: '', redirectTo: 'app/home', pathMatch: 'full' },
  {
    path: 'authentication',
    canActivate: [UnauthenticatedGuard],
    loadChildren: () =>
      import('./components/unauthenticated-module/unauthenticated.module').then(
        (m) => m.UnauthenticatedModule
      ),
  },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./components/authenticated-module/authenticated.module').then(
        (m) => m.AuthenticatedModule
      ),
  },
  {
    path: 'job-offerts',
    loadChildren: () =>
      import('./components/job-offerts-module/job-offerts.module').then(
        (m) => m.JobOffertsModule
      ),
  },
  {
    path: 'admin/job-offerts',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./components/job-offerts-module/job-offerts.module').then(
        (m) => m.JobOffertsModule
      ),
  },
  // development purposes
  {
    path: 'test',
    component: TestAppComponent,
  },
  {
    path: 'dev',
    component: DevelopComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
