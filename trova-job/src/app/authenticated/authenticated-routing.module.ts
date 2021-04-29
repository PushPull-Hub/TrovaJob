import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './wrapper/home/home.component';
import { ProfileComponent } from './wrapper/profile/profile.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: '', redirectTo: 'find-jobs', pathMatch: 'full' },
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: 'find-jobs', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticatedRoutingModule {}
