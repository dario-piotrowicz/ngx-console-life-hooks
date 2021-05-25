import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClearConsoleGuard } from '../clear-console.guard';
import { ColorsDocsPageComponent } from './colors-docs-page/colors-docs-page.component';
import { CustomComponent } from './custom/custom.component';
import { SchemesComponent } from './schemes/schemes.component';
import { ColorsDataViewComponent } from './colors-data-view/colors-data-view.component';

@NgModule({
  declarations: [
    CustomComponent,
    ColorsDataViewComponent,
    SchemesComponent,
    ColorsDocsPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ColorsDocsPageComponent,
      },
      {
        path: 'schemes',
        component: SchemesComponent,
        canActivate: [ClearConsoleGuard],
      },
      {
        path: 'custom',
        component: CustomComponent,
        canActivate: [ClearConsoleGuard],
      },
    ]),
  ],
})
export class ColorsDocsModule {}
