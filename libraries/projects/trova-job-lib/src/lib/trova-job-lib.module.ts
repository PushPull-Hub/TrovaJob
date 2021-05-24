import { NgModule } from '@angular/core';
import { TrovaJobLibComponent } from './trova-job-lib.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { ControlCardComponent } from './components/control-card/control-card.component';

@NgModule({
  declarations: [
    TrovaJobLibComponent,
    NotFoundPageComponent,
    CityCardComponent,
    ControlCardComponent,
  ],
  imports: [],
  exports: [TrovaJobLibComponent],
})
export class TrovaJobLibModule {}
