import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../layers/forms-styles.scss'],
})
export class SignInComponent implements OnInit {
  isThereError: boolean;
  errorMessage: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isThereError = false;
    this.errorMessage = null;
  }

  async signIn(form: NgForm) {
    await this.authenticationService
      .signIn(form.value.email, form.value.password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        this.isThereError = true;
        this.errorMessage = error.message;
      });
  }

  redirectToSignUpPage() {
    this.authenticationService.isSomeFormLoading.next(true);
    setTimeout(() => {
      this.authenticationService.isSomeFormLoading.next(false);
    }, 800);
    this.router.navigateByUrl('authentication/sign-up');
  }
}
