export class Card {
  constructor(title: CardTitle, icon: CardIcon) {
    this.title = title;
    this.icon = icon;
  }

  title: CardTitle;
  icon: CardIcon;
  userType?: UserType;
  onClickNavigateTo: string;
}

type CardTitle =
  | 'manage users'
  | 'manage job offerts'
  | 'check job offerts'
  | 'favorite'
  | 'offer Jobs'
  | 'update profile'
  | 'add place';

type CardIcon =
  | 'searchIcon'
  | 'UsersSettingsIcon'
  | 'profileSettingsIcon'
  | 'jobsSettingsIcon'
  | 'adminIcon'
  | 'favIcon'
  | 'addJobIcon';

type UserType = 'admin' | 'user' | 'company';
