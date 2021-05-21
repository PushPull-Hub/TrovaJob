import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationPossiblePaths } from 'src/app/models/app-paths.model';
import { JobOffert } from 'src/app/models/job.model';
import { TrovaJobHelperService } from 'src/app/services/helper.service';
import { JobsOffertsService } from 'src/app/services/jobs-offerts.service';

@Component({
  selector: 'app-offert',
  templateUrl: './offerts-cads.component.html',
  styleUrls: ['./offerts-cads.component.scss'],
})
export class OffertsCardsComponent implements OnInit {
  jobsOfferts: JobOffert[];
  loading: boolean;
  errorOnLoading: boolean;
  constructor(
    private jobsOffertsService: JobsOffertsService,
    private activeRoute: ActivatedRoute,
    private helperService: TrovaJobHelperService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.activeRoute.params.subscribe((params) => {
      const cityName = params['city'];
      cityName
        ? this.loadJobOffertsOf(cityName)
        : this.helperService.redirectTo('job-offerts');
    });
  }

  private loadJobOffertsOf(cityName) {
    this.jobsOffertsService.getjobOffertsByCityName(cityName).then((data) => {
      this.jobsOfferts = data;
      setTimeout(() => {
        this.errorOnLoading = false;
        this.loading = false;
      }, 300);
    });
  }

  redirectMeTo(event: ApplicationPossiblePaths) {
    this.helperService.redirectTo(event);
  }
}
