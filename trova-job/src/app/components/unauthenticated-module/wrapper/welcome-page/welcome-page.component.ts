import { Component, OnInit } from '@angular/core';
import { TrovaJobHelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  cardTitle: string;
  welcomeMessage: string;
  isLoading: boolean;

  constructor(private helperService: TrovaJobHelperService) {}

  ngOnInit(): void {
    this.isLoading = false;
    this.cardTitle = 'Torino Trova Job';
    this.welcomeMessage = "finding your job, it's our job";
  }

  accessApplication() {
    this.isLoading = true;
    setTimeout(() => {
      this.helperService.redirectTo('authentication/sign-in');
    }, 900);
  }
}
