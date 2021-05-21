import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { ApplicationPossiblePaths } from '../models/app-paths.model';
import { Configuration } from '../models/configuration.model';

import { User } from '../models/user.model';
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
        (configurations.navLinks = firebaseObject.navLinks),
        (configurations.cards = {
          home: [...firebaseObject.cards.home],
          manageJobs: [...firebaseObject.cards.manageJobs],
          manageUsers: [...firebaseObject.cards.manageUsers],
        }))
      : (configurations = null);
    return configurations;
  }

  redirectTo(path: ApplicationPossiblePaths) {
    this.router.navigateByUrl(path);
  }
}
