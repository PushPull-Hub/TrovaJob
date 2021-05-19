import { applicationPaths } from '../services/helper.service';

export class Card {
  constructor(title: CardTitle, icon: CardIcon) {
    this.title = title;
    this.icon = icon;
  }

  title: CardTitle;
  icon: CardIcon;
  userType?: UserType;
  onClickNavigateTo: applicationPaths;
}

type CardTitle =
  | 'manage users'
  | 'manage job offerts'
  | 'check job offerts'
  | 'favorite'
  | 'offer Jobs'
  | 'update profile';

type CardIcon =
  | 'searchIcon'
  | 'UsersSettingsIcon'
  | 'profileSettingsIcon'
  | 'jobsSettingsIcon'
  | 'adminIcon'
  | 'favIcon'
  | 'addJobIcon';

type UserType = 'admin' | 'user' | 'company';
