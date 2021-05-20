import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOffertsRoutingModule } from './job-offerts-routing.module';
import { CitiesCardsComponent } from './wrapper/cities-cards/cities-card.component';
import { OffertsCardsComponent } from './wrapper/offerts-cards/offerts-cads.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CitiesCardsComponent, OffertsCardsComponent, WrapperComponent],
  imports: [CommonModule, JobOffertsRoutingModule, SharedModule],
})
export class JobOffertsModule {}
