import { Component, Input } from '@angular/core';
import { ColorSchemeData } from '../color-scheme-data.model';

@Component({
  selector: 'app-color-scheme-doc',
  templateUrl: './color-scheme-doc.component.html',
  styleUrls: ['./color-scheme-doc.component.scss'],
})
export class ColorSchemeDocComponent {
  @Input() colorSchemeData: ColorSchemeData;
}
