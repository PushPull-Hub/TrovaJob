import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CustomErrorObject } from '../models/error.model';
import { User } from '../models/user.model';
import { ErrorService, FireBaseErrors } from './error.service';
import { TrovaJobHelperService } from './helper.service';

@Injectable({ providedIn: 'root' })
export class FireStoreCustomService {
  constructor(
    private angularFirestore: AngularFirestore,
    private helperFunctionsService: TrovaJobHelperService,
    private errorService: ErrorService
  ) {}

  async createUserOnFireStore(user: User, firebaseUserId: any): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.helperFunctionsService.createUserObjectFromUserCustomClass(
          user,
          firebaseUserId
        );
        this.angularFirestore
          .doc(`users/${firebaseUserId}`)
          .set(data, { merge: true });
        resolve(user);
      } catch (err) {
        const error = new CustomErrorObject(true, err.message, 400);
        reject(error);
      }
    });
  }

  getLoggedInUserDataFromFireStore(userId): Promise<User> {
    return new Promise((resolve) => {
      this.angularFirestore
        .doc(`users/${userId}`)
        .valueChanges()
        .subscribe(async (data) => {
          try {
            const user = await this.helperFunctionsService.convertFirebaseObjectToUserObject(
              data
            );
            resolve(user);
          } catch (error) {
            const customError = new CustomErrorObject(true, error.message, 401);
            this.errorService.errorOnSignIn.next(customError);
          }
        });
    });
  }
}
