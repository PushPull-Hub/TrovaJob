import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../../services/authentication.service';
import { User } from 'src/app/models/user.model';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';
import { TrovaJobHelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../layers/forms-styles.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  isThereError: boolean;
  errorMessage: string;
  listeningToErrors: Subscription;
  labelPosition: 'user' | 'company' = 'user';

  constructor(
    private authenticationService: AuthenticationService,
    private errorService: ErrorService,
    private helperService: TrovaJobHelperService
  ) {}

  ngOnInit(): void {
    this.listenToErrors();
    this.listeningToErrors = this.listenToErrors();
  }

  signUp(form: NgForm) {
    const user = this.generateUserFromInputs(form);
    this.authenticationService.signUp(user);
  }

  private listenToErrors() {
    return this.errorService.errorOnSignUp.subscribe((error) => {
      if (error) {
        this.isThereError = true;
        this.errorMessage = error.errorMessage;
      } else {
        this.isThereError = false;
        this.errorMessage = null;
      }
    });
  }

  private generateUserFromInputs(form: NgForm): User {
    let user = new User();
    user.email = form.value.email;
    user.password = form.value.password;
    user.username = form.value.username;
    user.adress = form.value.adress;
    user.phoneNumber = form.value.phoneNumber;
    user.role = this.labelPosition;
    user.birthday = {
      day: 0,
      month: 0,
      year: 0,
    };
    return user;
  }

  redirectToSignInPage() {
    this.authenticationService.isFormLoading.next(true);
    setTimeout(() => {
      this.authenticationService.isFormLoading.next(false);
      this.helperService.redirectTo('authentication/sign-in');
    }, 800);
  }

  ngOnDestroy() {
    this.listeningToErrors ? this.listeningToErrors.unsubscribe() : null;
  }
}
