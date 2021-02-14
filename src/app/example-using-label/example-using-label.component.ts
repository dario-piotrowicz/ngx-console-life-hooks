import { Component } from '@angular/core';

@Component({
  selector: 'app-example-using-label',
  templateUrl: './example-using-label.component.html',
  styleUrls: ['./example-using-label.component.scss'],
})
export class ExampleUsingLabelComponent {
  public showLabel = true;
  public labelIsBold: boolean = false;
}
