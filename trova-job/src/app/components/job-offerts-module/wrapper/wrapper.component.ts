import { Component, OnInit } from '@angular/core';
import { ApplicationPossiblePaths } from 'src/app/models/app-paths.model';
import {
  Configuration,
  NavbarConfiguration,
} from 'src/app/models/configuration.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TrovaJobHelperService } from 'src/app/services/helper.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  configurations: Configuration;
  navbraConfiguration: NavbarConfiguration | 'defaultConfiguration';
  navbarLoading: boolean;
  loading: boolean;
  errorOnLoading: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private helperService: TrovaJobHelperService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.navbarLoading = true;
    this.checkIfUserLogged();
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
