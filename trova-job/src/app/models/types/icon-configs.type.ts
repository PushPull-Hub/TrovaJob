import { SizeProp, Styles } from '@fortawesome/fontawesome-svg-core';
import { CardIcon } from '../card.model';

export class IconConfigurations extends Object {
  iconName: CardIcon;
  size: SizeProp;
  classes: string[];
  styles: Styles;
}
