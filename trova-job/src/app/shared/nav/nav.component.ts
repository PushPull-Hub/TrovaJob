import { Component, Input, OnInit } from '@angular/core';
import { NavbarConfiguration } from 'src/app/models/configuration.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./all-navbars.styles.scss'],
})
export class NavComponent implements OnInit {
  @Input() isDataLoading: boolean;
  @Input() configurations: NavbarConfiguration | 'defaultConfiguration';

  constructor() {}

  ngOnInit(): void {}
}
