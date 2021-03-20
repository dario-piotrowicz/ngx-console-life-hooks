import { Component } from '@angular/core';

@Component({
  selector: 'app-color-schemes-doc',
  templateUrl: './color-schemes-doc.component.html',
  styleUrls: ['./color-schemes-doc.component.scss'],
})
export class ColorSchemesDocComponent {
  colorSchemesData = [
    { name: 'none' },
    { name: 'terminal' },
    { name: 'angular' },
    { name: 'react' },
    { name: 'vue' },
    { name: 'default' },
  ];
}
