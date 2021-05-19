import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Configuration } from '../models/configuration.model';

import { User } from '../models/user.model';

export type applicationPaths =
  | 'authentication/welcome-page'
  | 'authentication/sign-in'
  | 'authentication/sign-up'
  | 'app/home'
  | 'app/profile'
  | 'check-offerts'
  | 'app/admin/manage-users'
  | 'app/admin/manage-jobs'
  | 'app/company/offer-job'
  | 'app/access-denied';

@Injectable({
  providedIn: 'root',
})
export class TrovaJobHelperService {
  constructor(private router: Router) {}

  createUserObjectFromUserCustomClass(
    user: User,
    firebaseUserId: any
  ): { [key: string]: any } {
    return {
      id: firebaseUserId,
      email: user.email,
      username: user.username,
      role: user.role,
      adress: user.adress,
      birthday: user.birthday,
      phoneNumber: user.phoneNumber,
    };
  }

  convertFirebaseObjectToUserObject(firebaseObject: {
    [key: string]: any;
  }): User {
    let user = new User();
    firebaseObject
      ? ((user.adress = firebaseObject.adress ?? null),
        (user.birthday = firebaseObject.birthday ?? null),
        (user.email = firebaseObject.email ?? null),
        (user.password = firebaseObject.password ?? null),
        (user.phoneNumber = firebaseObject.phoneNumber ?? null),
        (user.role = firebaseObject.role ?? null),
        (user.id = firebaseObject.id ?? null),
        (user.username = firebaseObject.username ?? null))
      : (user = null);
    return user;
  }

  convertFirebaseObjectToConfigurationsObject(firebaseObject: {
    [key: string]: any;
  }) {
    let configurations = new Configuration();
    firebaseObject
      ? ((configurations.abilities = firebaseObject.abilities),
        (configurations.cards = [...firebaseObject.cards]),
        (configurations.navLinks = firebaseObject.navLinks))
      : (configurations = null);
    return configurations;
  }

  redirectTo(path: applicationPaths) {
    this.router.navigateByUrl(path);
  }
}
