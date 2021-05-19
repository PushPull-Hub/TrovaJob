import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavbarConfiguration } from 'src/app/models/configuration.model';
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
import { ApplicationPossiblePaths } from 'src/app/models/app-paths.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isDataLoading: boolean;
  @Input() configurations: NavbarConfiguration;
  @Output() buttonClicked: EventEmitter<ApplicationPossiblePaths> =
    new EventEmitter<ApplicationPossiblePaths>(null);
  @Output() logmeOut: EventEmitter<true> = new EventEmitter<true>(null);

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

  constructor() {}

  ngOnInit(): void {}

  redirectMeTo(path: ApplicationPossiblePaths) {
    this.buttonClicked.emit(path);
  }

  logOut() {
    this.logmeOut.emit(true);
  }
}
