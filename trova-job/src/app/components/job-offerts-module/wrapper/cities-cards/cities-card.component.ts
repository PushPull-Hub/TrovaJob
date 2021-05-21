import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/rtm-databse.model';
import { JobsOffertsService } from 'src/app/services/jobs-offerts.service';

@Component({
  selector: 'app-cities-cards',
  templateUrl: './cities-cards.component.html',
  styleUrls: ['./cities-cards.component.scss'],
})
export class CitiesCardsComponent implements OnInit {
  citiesCards: City[];
  constructor(private jobService: JobsOffertsService, private router: Router) {}

  ngOnInit(): void {
    this.jobService.getAvailableCities().then((data) => {
      data ? (this.citiesCards = data) : null;
    });
  }

  takeMeToOffertsOf(cityName: string) {
    this.router.navigateByUrl('job-offerts/' + cityName);
  }
}
