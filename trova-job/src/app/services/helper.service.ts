import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserAbilities } from '../models/abilities.model';

import { User } from '../models/user.model';

type applicationPaths =
  | 'app/home'
  | 'authentication/sign-in'
  | 'authentication/sign-up'
  | 'profile'
  | 'authentication/welcome-page'
  | 'app/access-denied';

@Injectable({
  providedIn: 'root',
})
export class TrovaJobHelperService {
  constructor(private router: Router) {}

  createUserObjectFromUserCustomClass(
    user: User,
    firebaseUserId: any
  ): Promise<any> {
    return of({
      id: firebaseUserId,
      email: user.email,
      username: user.username,
      role: user.role,
      adress: user.adress,
      birthday: user.birthday,
      phoneNumber: user.phoneNumber,
      abilities: {},
    }).toPromise();
  }

  convertFirebaseObjectToUserObject(firebaseObject: {
    [key: string]: any;
  }): Promise<User> {
    let user = new User();
    firebaseObject
      ? ((user.adress = firebaseObject.adress ?? null),
        (user.birthday = firebaseObject.birthday ?? null),
        (user.email = firebaseObject.email ?? null),
        (user.password = firebaseObject.password ?? null),
        (user.phoneNumber = firebaseObject.phoneNumber ?? null),
        (user.role = firebaseObject.role ?? null),
        (user.id = firebaseObject.id ?? null),
        (user.username = firebaseObject.username ?? null),
        (user.abilities = firebaseObject.abilities ?? new UserAbilities()))
      : (user = null);
    return of(user).toPromise();
  }

  convertFirebaseObjectToAbilitiesObject(firebaseObject: {
    [key: string]: any;
  }): Promise<UserAbilities> {
    let abilities = new UserAbilities();
    firebaseObject
      ? ((abilities.canReadUsers = firebaseObject.canReadUsers ?? false),
        (abilities.canCreateUsers = firebaseObject.canCreateUsers ?? false),
        (abilities.canUpdateUsers = firebaseObject.canUpdateUsers ?? false),
        (abilities.canDeleteteUsers = firebaseObject.canDeleteteUsers ?? false),
        (abilities.canReadJobs = firebaseObject.canReadJobs ?? false),
        (abilities.canCreateJobs = firebaseObject.canCreateJobs ?? false),
        (abilities.canUpdateJobs = firebaseObject.canUpdateJobs ?? false),
        (abilities.canDeleteJobs = firebaseObject.canDeleteJobs ?? false),
        (abilities.canReadJob = firebaseObject.canReadJob ?? false),
        (abilities.canCreateJob = firebaseObject.canCreateJob ?? false),
        (abilities.canUpdateJob = firebaseObject.canUpdateJob ?? false),
        (abilities.canDeleteJob = firebaseObject.canDeleteJob ?? false),
        (abilities.canUpdateProfile = firebaseObject.canUpdateProfile ?? false))
      : (abilities = null);
    return of(abilities).toPromise();
  }

  redirectTo(path: applicationPaths) {
    this.router.navigateByUrl(path);
  }
}
