import { ModuleWithProviders, NgModule } from '@angular/core';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { ControlCardComponent } from './components/control-card/control-card.component';
import { TestComponent } from './components/test/test.component';
import { TrovaJobMainService } from './services/main.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    CityCardComponent,
    ControlCardComponent,
    TestComponent,
  ],
  imports: [CommonModule],
  exports: [
    NotFoundPageComponent,
    CityCardComponent,
    ControlCardComponent,
    TestComponent,
  ],
})
export class TrovaJobLibModule {
  public static forRoot(config): ModuleWithProviders<TrovaJobLibModule> {
    return {
      ngModule: TrovaJobLibModule,
      providers: [TrovaJobMainService, { provide: 'config', useValue: config }],
    };
  }
}
