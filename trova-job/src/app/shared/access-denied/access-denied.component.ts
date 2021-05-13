import { Component, OnInit } from '@angular/core';
import { TrovaJobHelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss'],
})
export class AccessDeniedComponent implements OnInit {
  constructor(private helperService: TrovaJobHelperService) {}

  ngOnInit(): void {}

  reportProblem() {
    console.log('application will support that soon...');
  }

  backtohome() {
    this.helperService.redirectTo('app/home');
  }
}
