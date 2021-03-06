import { Component, Input, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib/console-hooks';

@ConsoleHooks({
  phase: 'beforeAndAfter',
  logNonImplemented: true,
  exclude: [
    'ngAfterContentInit',
    'ngAfterContentChecked',
    'ngAfterViewInit',
    'ngAfterViewChecked',
  ],
})
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  public label = 'default-label';
  @Input() public labelIsBold = false;

  constructor() {}

  ngOnInit(): void {
    this.label = 'label component initialized';
    console.log('ngOnInit console.log from the LabelComponent');
  }
}
