import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TrovaJobHelperService } from '../services/helper.service';

@Injectable({
  providedIn: 'root',
})
export class UnauthenticatedGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private helperService: TrovaJobHelperService
  ) {}
  canActivate(): Promise<boolean> {
    return this.authenticationService.getloggedInUser().then((value) => {
      if (value) {
        this.helperService.redirectTo('app/home');
        return false;
      } else {
        return true;
      }
    });
  }
}
