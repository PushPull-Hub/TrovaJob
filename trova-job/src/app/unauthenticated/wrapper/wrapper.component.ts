import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-unauthenticated-components-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit, OnDestroy {
  loading: boolean;
  formLoadingSubscription: Subscription;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.formLoadingSubscription = this.authenticationService.isSomeFormLoading.subscribe(
      (value: boolean) => (this.loading = value)
    );
  }

  ngOnDestroy(): void {
    this.formLoadingSubscription.unsubscribe();
  }
}
