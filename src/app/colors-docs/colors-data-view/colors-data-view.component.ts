import { Component, Input } from '@angular/core';
import { ColorsData } from '../colors-data.model';

@Component({
  selector: 'app-colors-data-view',
  templateUrl: './colors-data-view.component.html',
  styleUrls: ['./colors-data-view.component.scss'],
})
export class ColorsDataViewComponent {
  @Input() colorsData: ColorsData;
}
