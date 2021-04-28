import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../layers/forms-styles.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  redirectToSignInPage() {
    this.authenticationService.isSomeFormLoading.next(true);
    setTimeout(() => {
      this.authenticationService.isSomeFormLoading.next(false);
      this.router.navigateByUrl('authentication/sign-in');
    }, 800);
  }
}
