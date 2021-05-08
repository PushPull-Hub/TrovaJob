import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { TrovaJobHelperService } from './helper.service';
import { CustomErrorObject } from '../models/error.model';
import { ErrorService, FireBaseErrors } from './error.service';
import { FireStoreCustomService } from './fire-store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  isFormLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private a: FireStoreCustomService,
    private helperFunctionsService: TrovaJobHelperService,
    private errorService: ErrorService
  ) {
    this.isAuthenticated();
  }

  signIn(email: string, password: string): void {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        try {
          const user = await this.a.getLoggedInUserDataFromFireStore(
            result.user.uid
          );
          localStorage.setItem('user', JSON.stringify(user));
          this.loggedInUser.next(user);
          this.helperFunctionsService.redirectTo('home');
        } catch (err) {
          const error = new CustomErrorObject(
            true,
            FireBaseErrors.onFireAuthSignIn,
            400
          );
          this.errorService.errorOnSignIn.next(error);
        }
      })
      .catch((err) => {
        const error = new CustomErrorObject(true, err.message, err.code);
        this.errorService.errorOnSignIn.next(error);
      });
  }

  signUp(user: User): void {
    this.angularFireAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(async (fireAuthResponse) => {
        try {
          if (fireAuthResponse.user.uid) {
            const savedUserOnFireStore: User = await this.a.createUserOnFireStore(
              user,
              fireAuthResponse.user.uid
            );
            console.log(savedUserOnFireStore);
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
        console.log('signout succefully ');

        this.helperFunctionsService.redirectTo('authentication/sign-in');
      })
      .catch((err) => {
        const customError = new CustomErrorObject(
          true,
          FireBaseErrors.onFireAuthSignOut,
          err.code
        );
        this.errorService.errorOnSignOut.next(customError);
      });
  }

  isAuthenticated() {
    return localStorage.getItem('user') ? true : false;
  }
}
