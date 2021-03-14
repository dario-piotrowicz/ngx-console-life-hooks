import { Component, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib/console-hooks';

@ConsoleHooks({
  componentName: 'Angular',
  colorScheme: 'angular',
  include: ['ngOnInit'],
  indent: 1,
})
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
