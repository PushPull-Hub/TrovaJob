import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  Input,
  OnDestroy,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase,
  faHeart,
  faIdCard,
  faSearch,
  faUsersCog,
  faUserShield,
  faFolderPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Card } from '../../models/card.model';

const importedIcons: { [key: string]: IconProp } = {
  searchIcon: faSearch,
  UsersSettingsIcon: faUsersCog,
  profileSettingsIcon: faIdCard,
  jobsSettingsIcon: faBriefcase,
  adminIcon: faUserShield,
  favIcon: faHeart,
  addJobIcon: faFolderPlus,
};
@Component({
  selector: 'tj-control-card',
  templateUrl: './control-card.component.html',
  styleUrls: ['./control-card.component.scss'],
})
export class ControlCardComponent implements OnInit, OnDestroy {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  @Input() card: Card;
  @ViewChild('iconContainer', { static: true, read: ViewContainerRef })
  iconContainer: ViewContainerRef;
  @ViewChild('adminIconContainer', { static: true, read: ViewContainerRef })
  adminIconContainer: ViewContainerRef;
  isLoading: boolean;

  ngOnInit(): void {
    this.fakeLoader();
  }

  createIcons(card: Card) {
    if (card.userType === 'admin') {
      this.createAdminIcon();
    }
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(FaIconComponent);
    const componentRef = this.iconContainer.createComponent(factory);
    componentRef.instance.icon = importedIcons[card.icon];
    componentRef.instance.size = '10x';
    componentRef.instance.classes = ['fontawesome-icon'];
    componentRef.instance.styles = { color: '#303f9f' };
    componentRef.instance.render();
  }

  createAdminIcon() {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(FaIconComponent);
    const componentRef = this.adminIconContainer.createComponent(factory);
    componentRef.instance.icon = importedIcons['adminIcon'];
    componentRef.instance.size = '2x';
    componentRef.instance.classes = ['admin-icon'];
    componentRef.instance.styles = { color: '#dd1b16' };
    componentRef.instance.render();
  }

  fakeLoader() {
    this.isLoading = true;
    this.createIcons(this.card);
    setTimeout(() => {
      this.isLoading = false;
    }, 900);
  }

  onCardClick(path) {
    // this.helperService.redirectTo(path);
    // emit to father
    console.log('should be emmited to father ');
  }

  ngOnDestroy(): void {}
}
