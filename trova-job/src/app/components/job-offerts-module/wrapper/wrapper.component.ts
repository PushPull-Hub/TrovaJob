import { Component, OnInit } from '@angular/core';
import { ApplicationPossiblePaths } from 'src/app/models/app-paths.model';
import {
  Configuration,
  NavbarConfiguration,
} from 'src/app/models/configuration.model';
import { Job } from 'src/app/models/job.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TrovaJobHelperService } from 'src/app/services/helper.service';
import { JobsOffertsService } from 'src/app/services/jobs-offerts.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  jobs: Job[];
  configurations: Configuration;
  navbraConfiguration: NavbarConfiguration | 'defaultConfiguration';
  navbarLoading: boolean;
  loading: boolean;
  errorOnLoading: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private jobsOffertsService: JobsOffertsService,
    private helperService: TrovaJobHelperService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.navbarLoading = true;
    this.loadJobs();
    this.checkIfUserLogged();
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

  async checkIfUserLogged() {
    try {
      const user = await this.authenticationService.getloggedInUser();
      if (user && user.role) {
        const configs = await this.userService.getConfigurations(user.role);
        this.configurations = configs;
        this.navbraConfiguration = this.configurations.navLinks;
      } else {
        this.navbraConfiguration = null;
      }
    } catch (error) {
      console.log(error);
      this.navbraConfiguration = null;
    } finally {
      this.navbarLoading = false;
    }
  }

  redirectMeTo(event: ApplicationPossiblePaths) {
    this.helperService.redirectTo(event);
  }

  logOut(value: boolean) {
    if (value) {
      this.authenticationService.logOut();
    }
  }
}
