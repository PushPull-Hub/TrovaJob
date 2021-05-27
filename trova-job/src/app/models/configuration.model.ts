import { Card } from './card.model';
import { miniUserObject, User } from './user.model';

export class Configuration extends Object {
  abilities: UserAbilities;
  cards: AppCards;
  navLinks: NavbarConfiguration | 'defaultConfiguration';
  profile: ProfileConfiguration;
}

export class UserAbilities extends Object {
  canReadUsers?: boolean;
  canCreateUsers?: boolean;
  canUpdateUsers?: boolean;
  canDeleteteUsers?: boolean;
  canReadJobs?: boolean;
  canCreateJobs?: boolean;
  canUpdateJobs?: boolean;
  canDeleteJobs?: boolean;
  canReadJob?: boolean;
  canCreateJob?: boolean;
  canUpdateJob?: boolean;
  canDeleteJob?: boolean;
  canUpdateProfile?: boolean;
}

export class AppCards extends Object {
  home: Card[];
  manageJobs?: Card[];
  manageUsers?: Card[];
}

export class NavbarConfiguration extends Object {
  buttons: NavbarButton[];
  userButton: UserButton;
}

class NavbarButton extends Object {
  title: string;
  iconName: string;
  onClickNavigateTo: string;
}

class UserButton extends Object {
  'type': string;
  'icon': string;
  'onClickNavigateTo': string;
}

export class ProfileConfiguration extends Object {
  user: User;
  cover: ProfileCoverConfiguration;
  body: ProfileBodyConfiguration;
}

export class ProfileCoverConfiguration extends Object {
  user: miniUserObject;
  coverImageUrl: string | 'default';
  avatarImageUrl: string | 'default';
  buttons: UserButton[];
}

export class ProfileBodyConfiguration {
  id: number;
}
