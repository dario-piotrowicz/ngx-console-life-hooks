import { Component, OnInit } from '@angular/core';
import { ColorsData } from '../colors-data.model';
import { examples } from './examples';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent implements OnInit {
  examples = examples;

  constructor() {}

  ngOnInit(): void {}
}
