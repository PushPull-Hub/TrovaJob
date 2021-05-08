import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomErrorObject } from '../models/error.model';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  errorOnSignUp: BehaviorSubject<CustomErrorObject> = new BehaviorSubject<CustomErrorObject>(
    null
  );
  errorOnSignIn: BehaviorSubject<CustomErrorObject> = new BehaviorSubject<CustomErrorObject>(
    null
  );

  errorOnSignOut: BehaviorSubject<CustomErrorObject> = new BehaviorSubject<CustomErrorObject>(
    null
  );

  constructor() {}
}

export enum FireBaseErrors {
  onFireAuthSignUp = 'an error occured during creating user on Firebase Authentication system',
  onFireAuthSignIn = 'an error occured during signing user on Firebase Authentication system',
  onFireAuthSignOut = 'an error occured during signing out from the Firebase Authentication system',
  onFireStoreSetUser = 'an error occured during procuder of store user data ',
  onFireStoreRetrieveUser = ' an error occured during recovery of user data from the database',
}
