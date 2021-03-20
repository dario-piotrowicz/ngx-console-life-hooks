import { Component } from '@angular/core';

import {
  ColorsForScheme,
  rawColorSchemes,
} from 'src/lib/get-colors-for-console-log';

@Component({
  selector: 'app-color-schemes-doc',
  templateUrl: './color-schemes-doc.component.html',
  styleUrls: ['./color-schemes-doc.component.scss'],
})
export class ColorSchemesDocComponent {
  colorSchemesData: { name: string; colors: ColorsForScheme }[] = [];

  constructor() {
    this.colorSchemesData = Object.keys(rawColorSchemes).map(
      (colorSchemeName) => ({
        name: colorSchemeName,
        colors: rawColorSchemes[colorSchemeName],
      })
    );
  }
}
