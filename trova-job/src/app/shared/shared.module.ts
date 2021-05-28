import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudSvgComponent } from './cloud-svg/cloud-svg.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

// Angular Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NavComponent } from './nav/nav.component';
import { DefaultNavComponent } from './nav/default-nav/default-nav.component';
import { LoggedUserNavComponent } from './nav/logged-user-nav/logged-user-nav.component';
import { ItsLoadingNavComponent } from './nav/its-loading-nav/its-loading-nav.component';
import { CreateCardDirective } from '../directives/create-card.directive';
import { ProfileComponent } from './profile/profile.component';
import { TestAppComponent } from 'develop/test-app/test-app.component';
import { DevelopComponent } from 'develop/develop/develop.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileCoverComponent } from './profile/first-column/profile-cover.component';
import { ProfileBodyComponent } from './profile/second-column/profile-body.component';
import { ProfileCoverLoadingComponent } from './profile/first-column/profile-cover-loading/profile-cover-loading.component';
import { ProfileBodyLoadingComponent } from './profile/second-column/profile-body-loading/profile-body-loading.component';

const AngularMaterialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatIconModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatProgressBarModule,
  MatTabsModule,
];
@NgModule({
  declarations: [
    TestAppComponent,
    DevelopComponent,
    CloudSvgComponent,
    AccessDeniedComponent,
    NavComponent,
    DefaultNavComponent,
    LoggedUserNavComponent,
    ItsLoadingNavComponent,
    CreateCardDirective,
    ProfileComponent,
    ProfileCoverComponent,
    ProfileBodyComponent,
    ProfileCoverLoadingComponent,
    ProfileBodyLoadingComponent,
  ],
  imports: [CommonModule, ...AngularMaterialModules, FontAwesomeModule],
  exports: [
    TestAppComponent,
    DevelopComponent,
    CloudSvgComponent,
    AccessDeniedComponent,
    NavComponent,
    DefaultNavComponent,
    LoggedUserNavComponent,
    ItsLoadingNavComponent,
    CreateCardDirective,
    ProfileComponent,
    ...AngularMaterialModules,
  ],
})
export class SharedModule {}
