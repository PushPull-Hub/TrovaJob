import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faUsersCog,
  faIdCard,
  faBriefcase,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardTitle: string;
  searchIcon;
  UsersSettingsIcon;
  profileSettingsIcon;
  jobsSettingsIcon;
  adminIcon;

  constructor() {}

  ngOnInit(): void {
    this.searchIcon = faSearch;
    this.UsersSettingsIcon = faUsersCog;
    this.profileSettingsIcon = faIdCard;
    this.jobsSettingsIcon = faBriefcase;
    this.adminIcon = faUserShield;
    this.cardTitle = 'Look For New Offerts';
  }

  onCardClick() {
    console.log('card clicked');
  }
}
