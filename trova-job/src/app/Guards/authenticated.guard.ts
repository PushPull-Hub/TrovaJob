import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TrovaJobHelperService } from '../services/helper.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private helperService: TrovaJobHelperService
  ) {}
  canActivate(): Promise<boolean> {
    return this.authenticationService.getloggedInUser().then((value) => {
      if (value) {
        return true;
      } else {
        this.helperService.redirectTo('authentication/sign-in');
        return false;
      }
    });
  }
}
