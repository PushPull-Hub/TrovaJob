import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { FireStoreCustomService } from './fire-store.service';
import { ErrorService, FireBaseErrors } from './error.service';

import { Role } from '../models/user.model';
import { Configuration } from '../models/configuration.model';

type SingleConfig = 'abilities' | 'cards' | 'navLinks';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  configurations: BehaviorSubject<Configuration> =
    new BehaviorSubject<Configuration>(null);

  constructor(
    private fireStoreCustomService: FireStoreCustomService,
    private errorService: ErrorService
  ) {}

  getConfigurations(userRole: Role): Promise<Configuration> {
    return new Promise<Configuration>((resolve, reject) => {
      this.fireStoreCustomService
        .getConfigurations(userRole)
        .subscribe((data: Configuration) => {
          data
            ? (this.configurations.next(data), resolve(data))
            : reject(FireBaseErrors.onFireStoreRetrieveUser);
        });
    });
  }

  getSignleConfig(userRole: Role, config: SingleConfig): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.configurations.subscribe(async (data) => {
        if (data) {
          resolve(data[config]);
        }
        try {
          const configs = await this.getConfigurations(userRole);
          resolve(configs[config]);
        } catch (error) {
          console.log(error);
        }
      });
    });
  }
}
