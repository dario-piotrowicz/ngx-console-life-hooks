import { Component, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib/console-hooks';

@ConsoleHooks({
  colorScheme: 'react',
  include: ['ngOnInit'],
  indent: 1,
})
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
})
export class ReactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
