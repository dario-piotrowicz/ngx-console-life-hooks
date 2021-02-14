import { Component, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib/console-hooks';

@ConsoleHooks({
  phase: 'beforeAndAfter',
  logNonImplemented: true,
})
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log;
  }
}
