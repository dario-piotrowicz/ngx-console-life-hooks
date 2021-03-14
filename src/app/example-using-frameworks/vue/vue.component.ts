import { Component, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib';

@ConsoleHooks({
  colorScheme: 'vue',
  indent: 1,
})
@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.scss'],
})
export class VueComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
