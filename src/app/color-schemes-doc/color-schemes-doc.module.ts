import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorSchemesDocComponent } from './color-schemes-doc.component';

@NgModule({
  declarations: [ColorSchemesDocComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ColorSchemesDocComponent,
      },
    ]),
  ],
})
export class ColorSchemesDocModule {}
