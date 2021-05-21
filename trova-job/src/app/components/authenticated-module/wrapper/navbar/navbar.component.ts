import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {
  faUserShield,
  faBuilding,
  faHome,
  faSearch,
  faPlus,
  faUser,
  faUsers,
  faGlobeAfrica,
} from '@fortawesome/free-solid-svg-icons';
import { NavbarConfiguration } from 'src/app/models/configuration.model';
import { UserService } from 'src/app/services/user.service';
import { TrovaJobHelperService } from 'src/app/services/helper.service';
import { ApplicationPossiblePaths } from 'src/app/models/app-paths.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  getLoggedUserAndNavbarConfigsSubscription: Subscription;

  navbarConfigurations: NavbarConfiguration;
  isThereLoggedUser: boolean;
  isLoading: boolean;

  //icons
  importedicons = {
    homeIcon: faHome,
    searchIcon: faSearch,
    addIcon: faPlus,
    adminIcon: faUserShield,
    companyIcon: faBuilding,
    userIcon: faUser,
    groupIcon: faUsers,
    notificationIcon: faGlobeAfrica,
  };

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private helperService: TrovaJobHelperService
  ) {}

  ngOnInit(): void {
    this.getLoggedUserAndNavbarConfigsSubscription =
      this.getLoggeduserThenconfigurations();
  }

  private getLoggeduserThenconfigurations() {
    this.isLoading = true;
    this.isThereLoggedUser = false;
    return this.authenticationService.loggedInUser.subscribe(
      async (user: User) => {
        if (user && user.id) {
          this.navbarConfigurations = await this.userService.getSignleConfig(
            user.role,
            'navLinks'
          );
          this.isThereLoggedUser = true;
          setTimeout(() => {
            this.isLoading = false;
          }, 100);
        } else {
          this.isLoading = false;
          this.isThereLoggedUser = false;
        }
      }
    );
  }

  navigate(path: ApplicationPossiblePaths) {
    this.helperService.redirectTo(path);
  }

  logOut() {
    this.authenticationService.logOut();
  }

  ngOnDestroy(): void {
    this.getLoggedUserAndNavbarConfigsSubscription.unsubscribe();
  }
}
