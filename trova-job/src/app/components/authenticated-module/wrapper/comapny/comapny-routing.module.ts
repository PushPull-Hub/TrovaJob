import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferJobComponent } from './offer-job/offer-job.component';

const routes: Routes = [
  { path: '', redirectTo: 'offer-job', pathMatch: 'full' },
  { path: 'offer-job', component: OfferJobComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComapnyRoutingModule {}
