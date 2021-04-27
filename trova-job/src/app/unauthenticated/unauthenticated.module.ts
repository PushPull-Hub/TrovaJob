import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';

import { WrapperComponent } from './wrapper/wrapper.component';
import { SignInComponent } from './wrapper/sign-in/sign-in.component';
import { SignUpComponent } from './wrapper/sign-up/sign-up.component';
import { WelcomePageComponent } from './wrapper/welcome-page/welcome-page.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const AngularMaterialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatIconModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [
    WrapperComponent,
    SignInComponent,
    SignUpComponent,
    WelcomePageComponent,
  ],
  imports: [
    CommonModule,
    UnauthenticatedRoutingModule,
    ...AngularMaterialModules,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UnauthenticatedModule {}
