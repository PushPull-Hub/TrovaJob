import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

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

  async signUp(user: User): Promise<boolean> {
    const firbaseResponse = await this.angularFireAuth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );

    try {
      return firbaseResponse && firbaseResponse.user.uid
        ? this.createUserOnFireStore(user, firbaseResponse.user.uid)
        : of(false).toPromise();
    } catch (error) {
      of(false).toPromise();
    }
  }

  async logOut(): Promise<void> {
    await this.angularFireAuth
      .signOut()
      .then(() => {
        this.loggedInUser.next(null);
        this.router.navigateByUrl('authentication/sign-in');
      })
      .catch((error) => console.log(error));
  }

  private async createUserOnFireStore(
    user: User,
    firebaseUserId: any
  ): Promise<boolean> {
    try {
      const data = await this.createUserObjectFromUserCustomClass(
        user,
        firebaseUserId
      );
      this.angularFirestore
        .doc(`users/${firebaseUserId}`)
        .set(data, { merge: true });
      this.loggedInUser.next(user);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  private createUserObjectFromUserCustomClass(
    user: User,
    firebaseUserId: any
  ): Promise<any> {
    return of({
      id: firebaseUserId,
      email: user.email,
      username: user.username,
      role: user.role,
      adress: user.adress,
      birthday: user.birthday,
      phoneNumber: user.phoneNumber,
    }).toPromise();
  }
}
