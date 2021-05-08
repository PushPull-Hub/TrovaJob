import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { User } from '../models/user.model';

type applicationPaths =
  | 'home'
  | 'authentication/sign-in'
  | 'authentication/sign-up'
  | 'profile';

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
    }).toPromise();
  }

  convertFirebaseObjectToUserObject(firebaseObject: {
    [key: string]: any;
  }): Promise<User> {
    const user = new User();
    user.adress = firebaseObject.adress ?? null;
    user.birthday = firebaseObject.birthday ?? null;
    user.email = firebaseObject.email ?? null;
    user.password = firebaseObject.password ?? null;
    user.phoneNumber = firebaseObject.phoneNumber ?? null;
    user.role = firebaseObject.role ?? null;
    user.id = firebaseObject.id ?? null;
    user.username = firebaseObject.username ?? null;
    return of(user).toPromise();
  }

  redirectTo(path: applicationPaths) {
    this.router.navigateByUrl(path);
  }
}
