import { Component, Input } from '@angular/core';
import { ConsoleHooks } from 'src/lib';

@ConsoleHooks({
  logNonImplemented: true,
  colorScheme: 'terminal',
  include: ['ngOnChanges'],
  indent: 1,
})
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() value: string;
}
