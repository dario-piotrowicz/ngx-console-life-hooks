import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ColorSchemesDocComponent } from './color-schemes-doc.component';
import { ColorSchemeDocComponent } from './color-scheme-doc/color-scheme-doc.component';

@NgModule({
  declarations: [ColorSchemesDocComponent, ColorSchemeDocComponent],
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
