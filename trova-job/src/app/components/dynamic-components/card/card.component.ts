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
} from '@fortawesome/free-solid-svg-icons';
import { Card } from 'src/app/models/card.model';

const importedIcons: { [key: string]: IconProp } = {
  searchIcon: faSearch,
  UsersSettingsIcon: faUsersCog,
  profileSettingsIcon: faIdCard,
  jobsSettingsIcon: faBriefcase,
  adminIcon: faUserShield,
  favIcon: faHeart,
};
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: Card;
  @ViewChild('iconContainer', { static: true, read: ViewContainerRef })
  iconContainer: ViewContainerRef;
  @ViewChild('adminIconContainer', { static: true, read: ViewContainerRef })
  adminIconContainer: ViewContainerRef;
  isLoading: boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.fakeLoader();
  }

  createIcons(card: Card) {
    if ((card.userType = 'admin')) {
      this.createAdminIcon();
    }
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      FaIconComponent
    );
    const componentRef = this.iconContainer.createComponent(factory);
    componentRef.instance.icon = importedIcons[card.icon];
    componentRef.instance.size = '10x';
    componentRef.instance.classes = ['fontawesome-icon'];
    componentRef.instance.styles = { color: '#303f9f' };
    componentRef.instance.render();
  }

  createAdminIcon() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      FaIconComponent
    );
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

  onCardClick() {
    console.log('card clicked');
  }

  ngOnDestroy(): void {}
}
