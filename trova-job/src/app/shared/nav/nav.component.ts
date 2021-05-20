import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
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
  styleUrls: ['./all-navbars.styles.scss'],
})
export class NavComponent implements OnInit, OnChanges {
  @Input() isDataLoading: boolean;
  @Input() configurations: NavbarConfiguration | 'defaultConfiguration';
  // @Output() buttonClicked: EventEmitter<ApplicationPossiblePaths> =
  //   new EventEmitter<ApplicationPossiblePaths>(null);

  //icons
  // importedicons = {
  //   homeIcon: faHome,
  //   searchIcon: faSearch,
  //   addIcon: faPlus,
  //   adminIcon: faUserShield,
  //   companyIcon: faBuilding,
  //   userIcon: faUser,
  //   groupIcon: faUsers,
  //   notificationIcon: faGlobeAfrica,
  // };

  constructor() {}

  ngOnInit(): void {
    // console.log('isDataLoading :', this.isDataLoading);
    // console.log('configurations :', this.configurations);
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('change on isDataLoading', changes.isDataLoading);
    // console.log('change on configurations', changes.configurations);
  }

  // redirectMeTo(path: ApplicationPossiblePaths) {
  //   this.buttonClicked.emit(path);
  // }

  // logOut() {}
}
