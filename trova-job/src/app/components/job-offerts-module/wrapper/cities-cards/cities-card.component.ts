import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { City } from 'src/app/models/rtm-databse.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobsOffertsService } from 'src/app/services/jobs-offerts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cities-cards',
  templateUrl: './cities-cards.component.html',
  styleUrls: ['./cities-cards.component.scss'],
})
export class CitiesCardsComponent implements OnInit {
  citiesCards: City[];
  adminAddNewCityCard: Card;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private jobService: JobsOffertsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.router.url == '/admin/job-offerts' ? this.checkifItsAdmin() : null;
    this.loadCitiesCards();
  }

  private async checkifItsAdmin() {
    const authUser = await this.authenticationService.getloggedInUser();
    this.userService
      .getSignleConfig(authUser.role, 'cards')
      .then((cards: Card[]) => {
        this.adminAddNewCityCard = cards['manageJobs'][0];
      });
  }

  private loadCitiesCards() {
    this.jobService.getAvailableCities().then((data) => {
      data ? (this.citiesCards = data) : null;
    });
  }

  takeMeToOffertsOf(cityName: string) {
    this.router.navigateByUrl('job-offerts/' + cityName);
  }
}
