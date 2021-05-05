import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from '../../../services/authentication.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../layers/forms-styles.scss'],
})
export class SignUpComponent implements OnInit {
  isCreatingAccount: boolean;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isCreatingAccount = false;
  }

  generateUserFromInputs(form: NgForm): User {
    let user = new User();
    user.email = form.value.email;
    user.password = form.value.password;
    user.username = form.value.username;
    user.adress = form.value.adress;
    user.phoneNumber = form.value.phoneNumber;
    user.role = 'user';
    user.birthday = {
      day: 0,
      month: 0,
      year: 0,
    };
    return user;
  }

  signUp(form: NgForm) {
    const user = this.generateUserFromInputs(form);
    this.authenticationService.signUp(user);
    form.reset();
  }

  redirectToSignInPage() {
    this.authenticationService.isSomeFormLoading.next(true);
    setTimeout(() => {
      this.authenticationService.isSomeFormLoading.next(false);
      this.router.navigateByUrl('authentication/sign-in');
    }, 800);
  }
}
