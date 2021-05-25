import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ApplicationPossiblePaths } from 'src/app/models/types/app-paths.model';
import { TrovaJobHelperService } from 'src/app/services/helper.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-unauthenticated-components-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit, OnDestroy {
  loading: boolean;
  formLoadingSubscription: Subscription;
  constructor(
    private authenticationService: AuthenticationService,
    private helperService: TrovaJobHelperService
  ) {}

  ngOnInit(): void {
    this.formLoadingSubscription =
      this.authenticationService.isFormLoading.subscribe(
        (value: boolean) => (this.loading = value)
      );
  }

  redirectMeTo(event: ApplicationPossiblePaths) {
    this.helperService.redirectTo(event);
  }

  ngOnDestroy(): void {
    this.formLoadingSubscription.unsubscribe();
  }
}
