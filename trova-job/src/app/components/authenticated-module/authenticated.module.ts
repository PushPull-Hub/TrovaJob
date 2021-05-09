import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WrapperComponent } from './wrapper/wrapper.component';
import { HomeComponent } from './wrapper/home/home.component';
import { NavbarComponent } from './wrapper/navbar/navbar.component';
import { ProfileComponent } from './wrapper/profile/profile.component';

import { SharedModule } from '../../shared/shared.module';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';

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
];

@NgModule({
  declarations: [
    WrapperComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    SharedModule,
    ...AngularMaterialModules,
  ],
})
export class AuthenticatedModule {}
