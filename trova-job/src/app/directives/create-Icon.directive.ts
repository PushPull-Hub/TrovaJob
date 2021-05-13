import {
  ComponentFactoryResolver,
  Directive,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faUsersCog,
  faIdCard,
  faBriefcase,
  faUserShield,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { Card } from '../models/card.model';

@Directive({
  selector: '[appCreatIcon]',
})
export class CreateIconDirective {
  @Input('iconName') iconName: string;
  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  createIcons(card: Card) {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(FaIconComponent);
    const host = this.viewContainerRef;
    host.clear();
    const componentRef = host.createComponent(factory);
    componentRef.instance.icon = importedIcons[card.icon];
    componentRef.instance.size = '10x';
    componentRef.instance.classes = ['fontawesome-icon'];
    componentRef.instance.styles = { color: '#303f9f' };
    componentRef.instance.render();
  }
}

const importedIcons: { [key: string]: IconProp } = {
  searchIcon: faSearch,
  UsersSettingsIcon: faUsersCog,
  profileSettingsIcon: faIdCard,
  jobsSettingsIcon: faBriefcase,
  adminIcon: faUserShield,
  favIcon: faHeart,
};
