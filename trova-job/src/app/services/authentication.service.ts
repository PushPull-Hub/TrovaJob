import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, Birthday } from 'src/app/models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  isSomeFormLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  signIn(email: string, password: string): Promise<any> {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  signUp(user: User): Promise<any> {
    return this.angularFireAuth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  }

  async logOut(): Promise<void> {
    await this.angularFireAuth
      .signOut()
      .then((data) => this.router.navigateByUrl('authentication/sign-in'))
      .catch((error) => console.log(error));
  }
}
