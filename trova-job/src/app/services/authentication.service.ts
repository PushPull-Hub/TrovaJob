import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MapperFunctionsService } from './helper.service';
import { CustomErrorObject } from '../models/error.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  isFormLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private helperFunctionsService: MapperFunctionsService,
    private errorService: ErrorService
  ) {
    this.isAuthenticated();
  }

  signIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.getLoggedInUserDataFromFireStore(res.user.uid);
      })
      .catch((err) => {
        const error = new CustomErrorObject(true, err.message, 400);
        this.errorService.errorOnSignIn.next(error);
      });
  }

  signUp(user: User) {
    new Promise((resolve) => {
      this.angularFireAuth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(async (fireAuthResponse) => {
          if (fireAuthResponse.user.uid) {
            const savingUserOnFireStore: boolean = await this.createUserOnFireStore(
              user,
              fireAuthResponse.user.uid
            );
            resolve(savingUserOnFireStore);
          }
        })
        .then((finalResult: any) => {
          finalResult ? this.helperFunctionsService.redirectTo('home') : null;
        });
    });
  }

  async logOut(): Promise<void> {
    await this.angularFireAuth
      .signOut()
      .then(() => {
        this.loggedInUser.next(null);
        localStorage.removeItem('user');
        this.helperFunctionsService.redirectTo('authentication/sign-in');
      })
      .catch((error) => console.log(error));
  }

  private async createUserOnFireStore(
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
      this.loggedInUser.next(user);
      return true;
    } catch (err) {
      const error = new CustomErrorObject(true, err.message, 400);
      this.errorService.errorOnSignUp.next(error);
      return false;
    }
  }

  private getLoggedInUserDataFromFireStore(userId) {
    this.angularFirestore
      .doc(`users/${userId}`)
      .valueChanges()
      .subscribe(async (data) => {
        try {
          const user = await this.helperFunctionsService.convertFirebaseObjectToUserObject(
            data
          );
          this.loggedInUser.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          this.helperFunctionsService.redirectTo('home');
        } catch (error) {
          const customError = new CustomErrorObject(
            true,
            'an error occured during recovery of user data from database, try again',
            401
          );
          this.errorService.errorOnSignIn.next(customError);
        }
      });
  }

  isAuthenticated() {
    return localStorage.getItem('user') ? true : false;
  }
}
