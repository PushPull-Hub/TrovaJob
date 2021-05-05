import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  isSomeFormLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore,
    private router: Router
  ) {}

  signIn(email: string, password: string): Promise<any> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(user: User) {
    this.signIn(user.email, user.password)
      .then((data) => {
        if (data && data.user.uid) {
          return this.angularFireAuth.createUserWithEmailAndPassword(
            user.email,
            user.password
          );
        }
      })
      .catch((error) => console.log(error));
  }

  createUserOnFireStore(user: User): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
      `users/${user.id}`
    );
    const data = this.createUserObjectFromUserCustomClass(user);
    return userRef.set(data, { merge: true });
  }

  createUserObjectFromUserCustomClass(user: User) {
    return {
      // id: user.id,
      // email: user.email,
      // password: user.password,
      username: user.username,
      role: user.role,
      adress: user.adress,
      birthday: user.birthday,
      phoneNumber: user.phoneNumber,
    };
  }

  async logOut(): Promise<void> {
    await this.angularFireAuth
      .signOut()
      .then((data) => {
        this.loggedInUser.next(null);
        this.router.navigateByUrl('authentication/sign-in');
      })
      .catch((error) => console.log(error));
  }

  canCreate(user: User): boolean {
    const allowed = ['admin', 'user'];
    return this.checkAuthorization(user, allowed);
  }

  canRead(user: User): boolean {
    const allowed = ['admin', 'user'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: User): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false;
    for (const role of allowedRoles) {
      if (user.role[role]) {
        return true;
      }
    }
    return false;
  }
}
