import {
  Component,
  ComponentFactoryResolver,
  Input,
  ViewChild,
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

@Component({
  selector: '[app-create-icon]',
  template: '<ng-container #host [icon]="iconName"></ng-container>',
})
export class CreateIconDirective {
  @ViewChild('host', { static: true, read: ViewContainerRef })
  container: ViewContainerRef;
  @Input() iconName: string;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createIcon() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      FaIconComponent
    );
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.icon = importedIcons[this.iconName];
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
