import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from '../../../services/authentication.service';

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

  signUp(form: NgForm) {
    this.isCreatingAccount = true;
    let user = new User();

    user.email = form.value.email;
    user.password = form.value.password;
    user.username = form.value.username;
    user.adress = form.value.adess;
    user.phoneNumber = form.value.phoneNumber;
    this.authenticationService
      .signUp(user)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

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
