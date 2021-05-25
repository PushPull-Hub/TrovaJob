import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApplicationPossiblePaths } from 'src/app/models/types/app-paths.model';
import { Card } from 'src/app/models/card.model';
import { IconConfigurations } from 'src/app/models/types/icon-configs.type';
import { TrovaJobHelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: Card;
  isLoading: boolean;

  mainIconconfigurations: IconConfigurations;
  adminIconconfigurations: IconConfigurations;

  constructor(private helperService: TrovaJobHelperService) {}

  ngOnInit(): void {
    this.fakeLoader();
  }

  fakeLoader() {
    this.isLoading = true;
    this.generateIconsConfigurations();
    setTimeout(() => {
      this.isLoading = false;
    }, 900);
  }

  private generateIconsConfigurations(card: Card = this.card) {
    if (card.userType === 'admin') {
      this.adminIconconfigurations = {
        iconName: 'adminIcon',
        size: '2x',
        classes: ['fontawesome-icon'],
        styles: { color: '#dd1b16' },
      };
    }
    this.mainIconconfigurations = {
      iconName: card.icon,
      size: '10x',
      classes: ['fontawesome-icon'],
      styles: { color: '#303f9f' },
    };
  }

  onCardClick(path: ApplicationPossiblePaths) {
    this.helperService.redirectTo(path);
  }

  ngOnDestroy(): void {}
}
