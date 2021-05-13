import { NgModule } from '@angular/core';
import { CloudSvgComponent } from './cloud-svg/cloud-svg.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

const AngularMaterialModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
];
@NgModule({
  declarations: [CloudSvgComponent, AccessDeniedComponent],
  imports: [...AngularMaterialModules],
  exports: [CloudSvgComponent, AccessDeniedComponent],
})
export class SharedModule {}
