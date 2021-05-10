import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faUsersCog,
  faIdCard,
  faBriefcase,
  faUserShield,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardTitle: string;
  searchIcon: any;
  UsersSettingsIcon: any;
  profileSettingsIcon: any;
  jobsSettingsIcon: any;
  adminIcon: any;
  favIcon: any;

  constructor() {}

  ngOnInit(): void {
    this.importIcons();
    this.cardTitle = 'Look For New Offerts';
  }

  private importIcons() {
    this.searchIcon = faSearch;
    this.UsersSettingsIcon = faUsersCog;
    this.profileSettingsIcon = faIdCard;
    this.jobsSettingsIcon = faBriefcase;
    this.adminIcon = faUserShield;
    this.favIcon = faHeart;
  }

  onCardClick() {
    console.log('card clicked');
  }
}
