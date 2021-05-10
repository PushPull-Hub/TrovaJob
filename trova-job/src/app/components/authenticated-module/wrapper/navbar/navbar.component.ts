import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  getLoggedUserSubscription: Subscription;
  loggedUserRole: 'user' | 'admin';
  isThereError: boolean;
  adminUserIcon: any;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.isThereError = false;
    this.getLoggedUserSubscription = this.getLoggedUserRole();
    this.adminUserIcon = faUserShield;
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

  logOut() {
    this.authenticationService.logOut();
  }

  ngOnDestroy(): void {
    this.getLoggedUserSubscription.unsubscribe();
  }
}
