import { Component, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib/console-hooks';

@ConsoleHooks({
  componentName: 'Frameworks Container',
  colorScheme: 'none',
})
@Component({
  selector: 'app-example-using-frameworks',
  templateUrl: './example-using-frameworks.component.html',
  styleUrls: ['./example-using-frameworks.component.scss'],
})
export class ExampleUsingFrameworksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
