import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudSvgComponent } from './cloud-svg/cloud-svg.component';

@NgModule({
  declarations: [CloudSvgComponent],
  imports: [CommonModule],
  exports: [CloudSvgComponent],
})
export class SharedModule {}
