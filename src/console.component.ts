import {ChangeDetectionStrategy, Component, Directive, ViewEncapsulation} from '@angular/core';

@Directive({
  selector: '[axConsoleShadow], [shadow]',
})
export class ConsoleShadowDirective {}

@Component({
  selector: 'ax-console',
  template: '<ng-content></ng-content>',
  styleUrls: ['./console.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsoleComponent {}
