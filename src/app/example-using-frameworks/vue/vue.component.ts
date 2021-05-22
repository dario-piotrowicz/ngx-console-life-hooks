import { Component, OnInit } from '@angular/core';
import { ConsoleHooks } from 'src/lib';

@ConsoleHooks({
  componentName: 'Vue',
  colorScheme: 'vue',
  indent: 1,
  include: ['ngOnInit', 'ngDoCheck'],
  logNonImplemented: true,
})
@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.scss'],
})
export class VueComponent implements OnInit {
  ngOnInit(): void {}

  onClick(): void {}
}
