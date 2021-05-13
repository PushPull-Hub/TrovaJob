import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobsOffertsService } from 'src/app/services/jobs-offerts.service';

@Component({
  selector: 'app-check-offerts',
  templateUrl: './check-offerts.component.html',
  styleUrls: ['./check-offerts.component.scss'],
})
export class CheckOffertsComponent implements OnInit {
  jobs: Job[];
  loading: boolean;
  errorOnLoading: boolean;
  constructor(private jobsOffertsService: JobsOffertsService) {}

  ngOnInit(): void {
    this.loadJobs();
  }

  private loadJobs() {
    this.loading = true;
    this.errorOnLoading = false;
    this.jobsOffertsService.getJobs().then((jobs) => {
      if (jobs) {
        this.jobs = jobs;
        setTimeout(() => {
          this.loading = false;
          this.errorOnLoading = false;
        }, 700);
      } else {
        this.loading = false;
        this.errorOnLoading = true;
      }
    });
  }
}
