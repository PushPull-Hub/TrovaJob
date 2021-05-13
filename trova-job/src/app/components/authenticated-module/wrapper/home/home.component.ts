import { Component, OnInit } from '@angular/core';
import { UserAbilities } from 'src/app/models/abilities.model';
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
      if (user) this.loadCards(user.abilities);
    });
  }

  private async loadCards(userabilities: UserAbilities) {
    this.isCardsLoading = true;
    this.cards = await this.userService.getControlCards(userabilities);
    setTimeout(() => {
      this.isCardsLoading = false;
    }, 700);
  }
}
