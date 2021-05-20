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
  private loggedInUserSubject: BehaviorSubject<User> =
    new BehaviorSubject<User>(null);
  loggedInUser = this.loggedInUserSubject.asObservable();
  isFormLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: FireStoreCustomService,
    private helperFunctionsService: TrovaJobHelperService,
    private errorService: ErrorService
  ) {}

  async signIn(email: string, password: string): Promise<void> {
    try {
      const signIn = await this.angularFireAuth.signInWithEmailAndPassword(
        email,
        password
      );
      const user =
        await this.angularFirestore.getLoggedInUserDataFromFireStore();

      signIn && user
        ? (this.loggedInUserSubject.next(user),
          this.helperFunctionsService.redirectTo('app/home'))
        : null;
    } catch (err) {
      const error = new CustomErrorObject(err.message, err.code);
      this.errorService.errorOnSignIn.next(error);
    }
  }

  async signUp(user: User): Promise<void> {
    try {
      const fireAuthResponse =
        await this.angularFireAuth.createUserWithEmailAndPassword(
          user.email,
          user.password
        );

      const savedUserOnFireStore: User =
        await this.angularFirestore.createUserOnFireStore(
          user,
          fireAuthResponse.user.uid
        );

      this.loggedInUserSubject.next(savedUserOnFireStore);
      this.helperFunctionsService.redirectTo('app/home');
    } catch (error) {
      this.errorService.errorOnSignUp.next(error);
    }
  }

  logOut() {
    this.angularFireAuth
      .signOut()
      .then(() => {
        this.loggedInUserSubject.next(null);
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
              this.loggedInUserSubject.next(userData);
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
