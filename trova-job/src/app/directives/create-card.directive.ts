import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { CardComponent } from '../components/dynamic-components/card/card.component';
import { Card } from '../models/card.model';

@Directive({
  selector: '[appCreateCard]',
})
export class CreateCardDirective implements OnInit {
  @Input('card') card: Card;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.createCardComponent();
  }

  createCardComponent() {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(CardComponent);
    const host = this.viewContainerRef;
    host.clear();
    const componentRef = host.createComponent(factory);
    componentRef.instance.card = this.card;
  }
}
