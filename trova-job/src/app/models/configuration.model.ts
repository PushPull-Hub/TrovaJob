import { UserAbilities } from './abilities.model';
import { Card } from './card.model';

export class Configuration extends Object {
  abilities: UserAbilities;
  cards: Card[];
  navLinks: {
    buttons: NavbarButton[];
    userButton: UserButton;
  };
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
