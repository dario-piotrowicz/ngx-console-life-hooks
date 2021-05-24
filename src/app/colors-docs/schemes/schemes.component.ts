import { Component } from '@angular/core';
import { rawColorSchemes } from 'src/lib/colors';
import { ColorsData } from '../colors-data.model';

@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.scss'],
})
export class SchemesComponent {
  colorSchemesData: ColorsData[] = [];

  constructor() {
    this.colorSchemesData = Object.keys(rawColorSchemes).map(
      (colorSchemeName) => ({
        name: colorSchemeName,
        colors: rawColorSchemes[colorSchemeName],
      })
    );
  }
}
