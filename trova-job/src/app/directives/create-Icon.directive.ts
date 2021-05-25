import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
// icons
import {
  faSearch,
  faUsersCog,
  faIdCard,
  faBriefcase,
  faUserShield,
  faHeart,
  faFolderPlus,
} from '@fortawesome/free-solid-svg-icons';
// types
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconConfigurations } from '../models/types/icon-configs.type';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// icons Defenitions
const importedIcons: { [key: string]: IconProp } = {
  searchIcon: faSearch,
  UsersSettingsIcon: faUsersCog,
  profileSettingsIcon: faIdCard,
  jobsSettingsIcon: faBriefcase,
  adminIcon: faUserShield,
  favIcon: faHeart,
  addJobIcon: faFolderPlus,
};

@Directive({
  selector: '[appCreatIcon]',
})
export class CreateIconDirective implements OnInit {
  @Input('configurations') configurations: IconConfigurations;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.configurations ? this.createIcon() : null;
  }

  createIcon(configurations: IconConfigurations = this.configurations) {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(FaIconComponent);
    const host = this.viewContainerRef;
    host.clear();
    const componentRef = host.createComponent(factory);
    componentRef.instance.icon = importedIcons[configurations.iconName];
    componentRef.instance.size = configurations.size;
    componentRef.instance.classes = configurations.classes;
    componentRef.instance.styles = configurations.styles;
    componentRef.instance.render();
  }
}
