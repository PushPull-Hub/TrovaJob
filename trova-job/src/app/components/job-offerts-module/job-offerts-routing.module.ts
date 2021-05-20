import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesCardsComponent } from './wrapper/cities-cards/cities-card.component';

import { OffertsCardsComponent } from './wrapper/offerts-cards/offerts-cads.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: '', component: CitiesCardsComponent },
      { path: ':city', component: OffertsCardsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobOffertsRoutingModule {}
