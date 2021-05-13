import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/auth';
import { FireStoreCustomService } from './fire-store.service';
import { TrovaJobHelperService } from './helper.service';

import { ErrorService, FireBaseErrors } from './error.service';
import { CustomErrorObject } from '../models/error.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  isFormLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: FireStoreCustomService,
    private helperFunctionsService: TrovaJobHelperService,
    private errorService: ErrorService
  ) {}

  signIn(email: string, password: string): void {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        try {
          const user =
            await this.angularFirestore.getLoggedInUserDataFromFireStore();
          const possibleError = new CustomErrorObject(
            FireBaseErrors.onFireStoreRetrieveUser,
            400
          );
          user
            ? (this.loggedInUser.next(user),
              this.helperFunctionsService.redirectTo('home'))
            : this.errorService.errorOnSignIn.next(possibleError);
        } catch (err) {
          this.errorService.errorOnSignIn.next(err);
        }
      })
      .catch((err) => {
        const error = new CustomErrorObject(err.message, err.code);
        console.log(err);
        this.errorService.errorOnSignIn.next(error);
      });
  }

  signUp(user: User): void {
    this.angularFireAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(async (fireAuthResponse) => {
        try {
          if (fireAuthResponse.user.uid) {
            const savedUserOnFireStore: User =
              await this.angularFirestore.createUserOnFireStore(
                user,
                fireAuthResponse.user.uid
              );
            this.loggedInUser.next(savedUserOnFireStore);
            this.helperFunctionsService.redirectTo('home');
          }
        } catch (error) {
          this.errorService.errorOnSignUp.next(error);
        }
      });
  }

  logOut() {
    this.angularFireAuth
      .signOut()
      .then(() => {
        this.loggedInUser.next(null);
        localStorage.removeItem('user');
        this.helperFunctionsService.redirectTo('authentication/sign-in');
      })
      .catch((err) => {
        const customError = new CustomErrorObject(
          FireBaseErrors.onFireAuthSignOut,
          err.code
        );
        this.errorService.errorOnSignOut.next(customError);
      });
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.loggedInUser.subscribe((value) => {
        if (value && value.id) {
          resolve(true);
        } else {
          this.angularFireAuth.onAuthStateChanged(async (user) => {
            if (user && user.uid) {
              const userData =
                await this.angularFirestore.getLoggedInUserDataFromFireStore();
              this.loggedInUser.next(userData);
              resolve(true);
            } else {
              resolve(false);
            }
          });
        }
      });
    });
  }

  getloggedInUser(): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {
      debugger;
      this.loggedInUser.subscribe(async (user) => {
        if (user && user.id) {
          resolve(user);
        } else {
          const firestoreUser =
            await this.angularFirestore.getLoggedInUserDataFromFireStore();
          if (firestoreUser && firestoreUser.id) {
            resolve(firestoreUser);
          } else resolve(null);
        }
      });
    });
  }
}
