import { Component, OnInit } from '@angular/core';
import { CityCard } from 'src/app/models/rtm-databse.model';
import { JobsOffertsService } from 'src/app/services/jobs-offerts.service';

@Component({
  selector: 'app-cities-cards',
  templateUrl: './cities-cards.component.html',
  styleUrls: ['./cities-cards.component.scss'],
})
export class CitiesCardsComponent implements OnInit {
  citiesCards: CityCard[];
  constructor(private jobService: JobsOffertsService) {}

  ngOnInit(): void {
    this.jobService.getAvailableCities().then((data) => {
      data ? (this.citiesCards = data) : null;
    });
  }
}
