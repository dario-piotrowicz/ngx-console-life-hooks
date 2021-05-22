import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExampleUsingInputComponent } from '../example-using-input/example-using-input.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExampleUsingInputComponent, InputComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExampleUsingInputComponent,
      },
    ]),
    FormsModule,
  ],
})
export class ExampleUsingInputModule {}
