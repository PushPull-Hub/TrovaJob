import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  getLoggedUserSubscription: Subscription;
  loggedUserRole: 'user' | 'admin';
  isThereError: boolean;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.isThereError = false;
    this.getLoggedUserSubscription = this.getLoggedUserRole();
  }

  private getLoggedUserRole() {
    return this.authenticationService.loggedInUser.subscribe((value: User) => {
      if (value && value.id) {
        this.loggedUserRole = value.role;
      } else {
        this.isThereError = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.getLoggedUserSubscription.unsubscribe();
  }
}
