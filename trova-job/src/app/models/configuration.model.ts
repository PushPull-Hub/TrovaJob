import { Card } from './card.model';

export class Configuration extends Object {
  abilities: UserAbilities;
  cards: AppCards;
  navLinks: NavbarConfiguration | 'defaultConfiguration';
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
