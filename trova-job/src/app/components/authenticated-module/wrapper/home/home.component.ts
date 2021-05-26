import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppCards } from 'src/app/models/configuration.model';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  cards: AppCards[];
  isCardsLoading: boolean;
  SubscribeToLoggedUser: Subscription;
  SubscribeToLoggingOut: Subscription;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.SubscribeToLoggedUser =
      this.authenticationService.currentLoggedUser.subscribe((user) => {
        if (user && user.id) {
          this.loadCards(user.role);
        } else {
          this.SubscribeToLoggingOut =
            this.authenticationService.logMeOutIfImNotLoggedIn();
        }
      });
    setTimeout(() => {
      this.checkifstillLoading();
    }, 2000);
  }

  private checkifstillLoading() {
    if (this.isCardsLoading) {
      console.log('logout after a loading check ');
      this.authenticationService.logOut();
    }
  }

  private async loadCards(userRole) {
    this.isCardsLoading = true;
    this.cards = await this.userService.getSignleConfig(userRole, 'cards');
    setTimeout(() => {
      this.isCardsLoading = false;
    }, 200);
  }

  ngOnDestroy(): void {
    this.SubscribeToLoggedUser
      ? this.SubscribeToLoggedUser.unsubscribe()
      : null;
    this.SubscribeToLoggingOut
      ? this.SubscribeToLoggingOut.unsubscribe()
      : null;
  }
}
