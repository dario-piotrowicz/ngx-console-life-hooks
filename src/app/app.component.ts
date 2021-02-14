import { Component } from '@angular/core';
import { ConsoleHooks } from '../lib/console-hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@ConsoleHooks({
  phase: 'beforeAndAfter',
  logNonImplemented: true,
})
export class AppComponent {
  public showLabel = true;
}
