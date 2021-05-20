import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-navbar',
  templateUrl: './default-nav.component.html',
  styleUrls: ['../all-navbars.styles.scss'],
})
export class DefaultNavComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}

  redirectMeToAccessPage() {
    this.router.navigateByUrl('authentication/sign-in');
  }

  redirectMeToWelcomePage() {
    this.router.navigateByUrl('authentication/welcome-page');
  }
}
