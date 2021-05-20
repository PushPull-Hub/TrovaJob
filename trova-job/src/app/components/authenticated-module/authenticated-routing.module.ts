import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/Guards/admin.guard';
import { CompanyGuard } from 'src/app/Guards/company.guard';
import { AccessDeniedComponent } from 'src/app/shared/access-denied/access-denied.component';
import { HomeComponent } from './wrapper/home/home.component';
import { ProfileComponent } from './wrapper/profile/profile.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: 'app',
    component: WrapperComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      // { path: 'check-offerts', component: CheckOffertsComponent },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./wrapper/admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'company',
        canActivate: [CompanyGuard],
        loadChildren: () =>
          import('./wrapper/comapny/comapny.module').then(
            (m) => m.ComapnyModule
          ),
      },
      { path: 'access-denied', component: AccessDeniedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
