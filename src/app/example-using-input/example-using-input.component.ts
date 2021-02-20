import { Component } from '@angular/core';
import { ConsoleHooks } from 'src/lib/console-hooks';

@ConsoleHooks({
  logNonImplemented: true,
  include: ['ngAfterContentChecked', 'ngAfterViewChecked'],
})
@Component({
  selector: 'app-example-using-input',
  templateUrl: './example-using-input.component.html',
  styleUrls: ['./example-using-input.component.scss'],
})
export class ExampleUsingInputComponent {
  public inputValue = '';

  public setInputToCurrentTime() {
    const date = new Date();
    const hour = `${date.getHours() < 9 ? '0' : ''}${date.getHours()}`;
    const min = `${date.getMinutes() < 9 ? '0' : ''}${date.getMinutes()}`;
    const sec = `${date.getSeconds() < 9 ? '0' : ''}${date.getSeconds()}`;
    const millis = `${
      date.getMilliseconds() < 9 ? '00' : date.getMilliseconds() < 99 ? '0' : ''
    }${date.getMilliseconds()}`;
    this.inputValue = `${hour}:${min}:${sec}.${millis}`;
  }
}
