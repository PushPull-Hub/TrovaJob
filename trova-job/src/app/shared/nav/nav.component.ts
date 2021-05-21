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
export class NavComponent implements OnInit {
  @Input() isDataLoading: boolean;
  @Input() configurations: NavbarConfiguration | 'defaultConfiguration';

  constructor() {}

  ngOnInit(): void {}
}
