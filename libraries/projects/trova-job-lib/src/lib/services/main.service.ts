import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrovaJobMainService {
  constructor(@Inject('config') private config) {}

  logInputedConfigs() {
    console.log(this.config);
  }
}
