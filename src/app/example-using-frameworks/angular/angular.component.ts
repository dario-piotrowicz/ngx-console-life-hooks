import { Component, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib/console-hooks';

@ConsoleHooks({
  componentName: 'Angular',
  colorScheme: 'angular',
  include: ['ngOnInit', 'ngDoCheck'],
  indent: 1,
  logNonImplemented: true,
})
@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  ngOnInit(): void {}

  onClick(): void {}
}
