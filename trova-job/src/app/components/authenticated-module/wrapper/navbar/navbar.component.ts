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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  getLoggedUserSubscription: Subscription;
  loggedUserRole: 'user' | 'admin' | 'company';
  isThereError: boolean;

  //icons
  homeIcon: any;
  searchIcon: any;
  addIcon: any;
  adminIcon: any;
  userIcon: any;
  companyIcon: any;
  groupIcon: any;
  notificationIcon: any;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.isThereError = false;
    this.getLoggedUserSubscription = this.getLoggedUserRole();
    this.importIcons();
  }

  private getLoggedUserRole() {
    return this.authenticationService.loggedInUser.subscribe((value: User) => {
      if (value && value.id) {
        this.loggedUserRole = value.role;
      } else {
        this.isThereError = true;
      }
    });
  }

  private importIcons() {
    this.homeIcon = faHome;
    this.searchIcon = faSearch;
    this.addIcon = faPlus;
    this.adminIcon = faUserShield;
    this.companyIcon = faBuilding;
    this.userIcon = faUser;
    this.groupIcon = faUsers;
    this.notificationIcon = faGlobeAfrica;
  }

  logOut() {
    this.authenticationService.logOut();
  }

  ngOnDestroy(): void {
    this.getLoggedUserSubscription.unsubscribe();
  }
}
