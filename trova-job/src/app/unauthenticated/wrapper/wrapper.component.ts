import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthenticated-components-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  isLoading: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isLoading = false;
  }
}
