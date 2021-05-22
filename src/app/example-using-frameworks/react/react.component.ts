import { Component, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib/console-hooks';

@ConsoleHooks({
  componentName: 'React',
  colorScheme: 'react',
  include: ['ngOnInit', 'ngDoCheck'],
  indent: 1,
  logNonImplemented: true,
})
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
})
export class ReactComponent implements OnInit {
  ngOnInit(): void {}

  onClick(): void {}
}
