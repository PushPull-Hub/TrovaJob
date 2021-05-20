import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-its-loading-nav',
  templateUrl: './its-loading-nav.component.html',
  styleUrls: ['../all-navbars.styles.scss'],
})
export class ItsLoadingNavComponent implements OnInit {
  userIcon = faUser;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  logOut() {
    this.authenticationService.componentRequiredLogOut.next(true);
  }
}
