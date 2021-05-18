import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
type UserType = 'admin' | 'user' | 'company';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: Card[];
  isCardsLoading: boolean;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.authenticationService.loggedInUser.subscribe((user) => {
      if (user) this.loadCards(user.role);
    });
  }

  private async loadCards(userRole) {
    this.isCardsLoading = true;
    this.cards = await this.userService.getSignleConfig(userRole, 'cards');
    setTimeout(() => {
      this.isCardsLoading = false;
    }, 700);
  }
}
