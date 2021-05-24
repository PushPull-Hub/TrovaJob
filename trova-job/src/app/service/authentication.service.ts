import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User, Birthday } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  isSomeFormLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private firebase , private router: Router) {}

  signIn() {
    const user = new User();
    user.id = '123456';
    user.email = 'test@gmail.com';
    user.username = 'firstName secondName';
    user.adress = ' Via Maroncelli Numero: 60';
    user.phoneNumber = +39123456789;
    user.birthday = new Birthday(10, 10, 1999);
    user.role = 'admin';
    this.loggedInUser.next(user);
    this.router.navigateByUrl('home/find-jobs');
  }

  signUp(user: User) {
    // const user = new User();
    // user.id = '123456';
    // user.email = 'test@gmail.com';
    // user.username = 'firstName secondName';
    // user.adress = ' Via Maroncelli Numero: 60';
    // user.phoneNumber = +39123456789;
    // user.birthday = new Birthday(10, 10, 1999);
    // user.role = 'admin';
    // this.loggedInUser.next(user);
    this.router.navigateByUrl('home/find-jobs');
  }

  logOut() {
    this.router.navigateByUrl('authentication/sign-in');
  }
}
