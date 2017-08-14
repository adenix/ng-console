import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ax-console-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReturnComponent {
  @Input() values: string[];
}
