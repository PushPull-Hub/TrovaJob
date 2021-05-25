import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TrovaJobHelperService } from '../services/helper.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private helperService: TrovaJobHelperService
  ) {}

  canActivate(): Promise<boolean> {
    return this.authenticationService.getloggedInUser().then((user) => {
      if (
        (user && user.role === 'admin') ||
        (user && user.role === 'company')
      ) {
        return true;
      } else {
        this.helperService.redirectTo('app/access-denied');
        return false;
      }
    });
  }
}
