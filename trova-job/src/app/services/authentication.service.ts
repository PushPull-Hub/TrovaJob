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
  ) {
    this.isAuthenticated();
  }

  isAuthenticated() {
    return localStorage.getItem('user') ? true : false;
  }

  signIn(email: string, password: string): void {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        try {
          const user = await this.angularFirestore.getLoggedInUserDataFromFireStore();
          const possibleError = new CustomErrorObject(
            FireBaseErrors.onFireStoreRetrieveUser,
            400
          );
          user
            ? (localStorage.setItem('user', JSON.stringify(user)),
              this.loggedInUser.next(user),
              this.helperFunctionsService.redirectTo('home'))
            : this.errorService.errorOnSignIn.next(possibleError);
        } catch (err) {
          this.errorService.errorOnSignIn.next(err);
        }
      })
      .catch((err) => {
        const error = new CustomErrorObject(err.message, err.code);
        this.errorService.errorOnSignIn.next(error);
      });
  }

  signUp(user: User): void {
    this.angularFireAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(async (fireAuthResponse) => {
        try {
          if (fireAuthResponse.user.uid) {
            const savedUserOnFireStore: User = await this.angularFirestore.createUserOnFireStore(
              user,
              fireAuthResponse.user.uid
            );
            this.helperFunctionsService.storeOnLocalStorage('user', user);
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
}
