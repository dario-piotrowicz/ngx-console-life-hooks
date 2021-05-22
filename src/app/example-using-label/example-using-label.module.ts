import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelComponent } from './label/label.component';
import { ExampleUsingLabelComponent } from './example-using-label.component';
import { RouterModule } from '@angular/router';
import { ClearConsoleGuard } from '../clear-console.guard';

@NgModule({
  declarations: [LabelComponent, ExampleUsingLabelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExampleUsingLabelComponent,
        canActivate: [ClearConsoleGuard],
      },
    ]),
  ],
})
export class ExampleUsingLabelModule {}
