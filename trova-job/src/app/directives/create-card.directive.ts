import {
  ComponentFactoryResolver,
  Directive,
  Injector,
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
  @Input() card: Card;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  createCardComponent() {
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(CardComponent);
    const host = this.viewContainerRef;
    host.clear();
    const componentRef = host.createComponent(factory);
    componentRef.instance.card = this.card;

    // const service = this.injector.get(ComponentFactoryResolver);
  }
}
