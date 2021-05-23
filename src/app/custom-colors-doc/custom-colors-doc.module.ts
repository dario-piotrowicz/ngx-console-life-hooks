import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomColorsDocComponent } from './custom-colors-doc/custom-colors-doc.component';
import { RouterModule } from '@angular/router';
import { ClearConsoleGuard } from '../clear-console.guard';

@NgModule({
  declarations: [CustomColorsDocComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomColorsDocComponent,
        canActivate: [ClearConsoleGuard],
      },
    ]),
  ],
})
export class CustomColorsDocModule {}
