export class Card {
  title: CardTitle;
  icon: CardIcon;
  userType?: userType;
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
  | 'favIcon';

type userType = 'admin' | 'user' | 'company';
