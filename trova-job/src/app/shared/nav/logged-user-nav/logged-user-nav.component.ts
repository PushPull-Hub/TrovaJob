import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ApplicationPossiblePaths } from 'src/app/models/app-paths.model';

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
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavbarConfiguration } from 'src/app/models/configuration.model';
import { TrovaJobHelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-logged-user-nav',
  templateUrl: './logged-user-nav.component.html',
  styleUrls: ['../all-navbars.styles.scss'],
})
export class LoggedUserNavComponent implements OnInit {
  @Input() configurations: NavbarConfiguration;

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
    private helperService: TrovaJobHelperService
  ) {}

  ngOnInit(): void {}

  redirectMeTo(path: ApplicationPossiblePaths) {
    this.helperService.redirectTo(path);
  }

  logOut() {
    this.authenticationService.logOut();
  }
}
