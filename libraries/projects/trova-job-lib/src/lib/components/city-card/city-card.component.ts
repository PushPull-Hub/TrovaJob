import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'tj-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnInit {
  @Input() card: Card;
  constructor() {}

  ngOnInit(): void {}

  takeMeToOffertsOf(path) {
    console.log('emit to father');
  }
}
