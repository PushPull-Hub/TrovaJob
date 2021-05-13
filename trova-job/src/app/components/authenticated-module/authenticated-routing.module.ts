import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOffertsComponent } from './wrapper/check-offerts/check-offerts.component';
import { HomeComponent } from './wrapper/home/home.component';
import { ProfileComponent } from './wrapper/profile/profile.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: 'home',
    component: WrapperComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'check-offerts', component: CheckOffertsComponent },
      {
        path: 'admin',
        loadChildren: () =>
          import('./wrapper/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'company',
        loadChildren: () =>
          import('./wrapper/comapny/comapny.module').then(
            (m) => m.ComapnyModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
