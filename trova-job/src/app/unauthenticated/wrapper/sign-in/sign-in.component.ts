import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../service/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['../layers/forms-styles.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  signIn(form: NgForm) {
    console.log(form);

    this.authenticationService.signIn();
  }

  redirectToSignUpPage() {
    this.authenticationService.isSomeFormLoading.next(true);
    setTimeout(() => {
      this.authenticationService.isSomeFormLoading.next(false);
    }, 800);
    this.router.navigateByUrl('authentication/sign-up');
  }
}
