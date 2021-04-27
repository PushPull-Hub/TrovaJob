import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthenticatedRoutingModule } from './unauthenticated-routing.module';
import { ElementsWrapperComponent } from './elements-wrapper/elements-wrapper.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SignInComponent } from './wrapper/sign-in/sign-in.component';
import { SignUpComponent } from './wrapper/sign-up/sign-up.component';
import { WelcomePageComponent } from './wrapper/welcome-page/welcome-page.component';


@NgModule({
  declarations: [ElementsWrapperComponent, WrapperComponent, SignInComponent, SignUpComponent, WelcomePageComponent],
  imports: [
    CommonModule,
    UnauthenticatedRoutingModule
  ]
})
export class UnauthenticatedModule { }
