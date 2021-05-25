import { NgModule } from '@angular/core';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { ControlCardComponent } from './components/control-card/control-card.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    CityCardComponent,
    ControlCardComponent,
    TestComponent,
  ],
  imports: [],
  exports: [
    NotFoundPageComponent,
    CityCardComponent,
    ControlCardComponent,
    TestComponent,
  ],
})
export class TrovaJobLibModule {}
