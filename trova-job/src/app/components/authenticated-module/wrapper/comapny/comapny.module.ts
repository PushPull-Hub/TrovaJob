import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComapnyRoutingModule } from './comapny-routing.module';
import { OfferJobComponent } from './offer-job/offer-job.component';


@NgModule({
  declarations: [OfferJobComponent],
  imports: [
    CommonModule,
    ComapnyRoutingModule
  ]
})
export class ComapnyModule { }
