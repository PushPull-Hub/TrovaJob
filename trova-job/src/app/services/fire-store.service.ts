import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { TrovaJobHelperService } from './helper.service';
import { ErrorService, FireBaseErrors } from './error.service';

import { User } from '../models/user.model';
import { CustomErrorObject } from '../models/error.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

type Role = 'admin' | 'user' | 'company';
@Injectable({ providedIn: 'root' })
export class FireStoreCustomService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private helperService: TrovaJobHelperService,
    private errorService: ErrorService
  ) {}

  async createUserOnFireStore(user: User, firebaseUserId: any): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const data = this.helperService.createUserObjectFromUserCustomClass(
          user,
          firebaseUserId
        );
        this.angularFirestore
          .doc(`users/${firebaseUserId}`)
          .set(data, { merge: true });
        resolve(user);
      } catch (err) {
        const error = new CustomErrorObject(err.message, 400);
        reject(error);
      }
    });
  }

  getLoggedInUserDataFromFireStore(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.onAuthStateChanged((user) => {
        if (user && user.uid) {
          this.angularFirestore
            .doc(`users/${user.uid}`)
            .valueChanges()
            .subscribe(async (data) => {
              try {
                const user =
                  this.helperService.convertFirebaseObjectToUserObject(data);
                resolve(user);
              } catch (error) {
                const customError = new CustomErrorObject(error.message, 401);
                this.errorService.errorOnSignIn.next(customError);
                resolve(null);
              }
            });
        } else {
          const error = new CustomErrorObject(
            FireBaseErrors.onFireAuthSignIn,
            400
          );
          resolve(null);
        }
      });
    });
  }

  getConfigurations(userRole: Role): Observable<any> {
    return this.angularFirestore
      .doc(`configurations/${userRole}`)
      .valueChanges();
  }

  // development purposes
  // storeOnFirebase(object: any, path: string) {
  //   this.angularFirestore
  //     .doc(path)
  //     .set(object, { merge: true })
  //     .then((res) => console.log(res, 'done'));
  // }
}
