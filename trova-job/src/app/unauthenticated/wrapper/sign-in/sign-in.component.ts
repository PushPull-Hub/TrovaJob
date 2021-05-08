import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';
import { MapperFunctionsService } from 'src/app/services/helper.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../layers/forms-styles.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  isThereError: boolean;
  errorMessage: string;
  listeningToErrors: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private errorService: ErrorService,
    private helperService: MapperFunctionsService
  ) {}

  ngOnInit(): void {
    this.listenToErrors();
    this.listeningToErrors = this.listenToErrors();
  }

  signIn(form: NgForm) {
    this.authenticationService.signIn(form.value.email, form.value.password);
  }

  private listenToErrors() {
    return this.errorService.errorOnSignIn.subscribe((error) => {
      if (error) {
        this.isThereError = true;
        this.errorMessage = error.errorMessage;
      } else {
        this.isThereError = false;
        this.errorMessage = null;
      }
    });
  }

  redirectToSignUpPage() {
    this.authenticationService.isFormLoading.next(true);
    setTimeout(() => {
      this.authenticationService.isFormLoading.next(false);
    }, 800);
    this.helperService.redirectTo('authentication/sign-up');
  }

  ngOnDestroy() {
    this.listeningToErrors ? this.listeningToErrors.unsubscribe() : null;
  }
}
