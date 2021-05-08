import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { TrovaJobHelperService } from './helper.service';

@Injectable({ providedIn: 'root' })
export class FireStoreCustomService {
  constructor(
    private angularFirestore: AngularFirestore,
    private helperFunctionsService: TrovaJobHelperService
  ) {}

  async createUserOnFireStore(
    user: User,
    firebaseUserId: any
  ): Promise<boolean> {
    try {
      const data = await this.helperFunctionsService.createUserObjectFromUserCustomClass(
        user,
        firebaseUserId
      );
      this.angularFirestore
        .doc(`users/${firebaseUserId}`)
        .set(data, { merge: true });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  getLoggedInUserDataFromFireStore(userId) {
    this.angularFirestore
      .doc(`users/${userId}`)
      .valueChanges()
      .subscribe(async (data) => {
        return await this.helperFunctionsService.convertFirebaseObjectToUserObject(
          data
        );
      });
  }
}
