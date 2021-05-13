import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ManageUsersComponent, ManageJobsComponent],
  imports: [CommonModule, SharedModule, AdminRoutingModule],
})
export class AdminModule {}
