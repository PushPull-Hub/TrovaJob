import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComapnyRoutingModule } from './comapny-routing.module';
import { OfferJobComponent } from './offer-job/offer-job.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [OfferJobComponent],
  imports: [CommonModule, SharedModule, ComapnyRoutingModule],
})
export class ComapnyModule {}
