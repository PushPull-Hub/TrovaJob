import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'manage-users', pathMatch: 'full' },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'manage-jobs', component: ManageJobsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
