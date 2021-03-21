import { Component } from '@angular/core';
import { rawColorSchemes } from 'src/lib/raw-color-schemes';

import { ColorSchemeData } from './color-scheme-data.model';

@Component({
  selector: 'app-color-schemes-doc',
  templateUrl: './color-schemes-doc.component.html',
  styleUrls: ['./color-schemes-doc.component.scss'],
})
export class ColorSchemesDocComponent {
  colorSchemesData: ColorSchemeData[] = [];

  constructor() {
    this.colorSchemesData = Object.keys(rawColorSchemes).map(
      (colorSchemeName) => ({
        name: colorSchemeName,
        colors: rawColorSchemes[colorSchemeName],
      })
    );
  }
}
