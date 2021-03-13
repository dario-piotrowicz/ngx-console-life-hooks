import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ExampleUsingFrameworksComponent } from './example-using-frameworks.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { VueComponent } from './vue/vue.component';

@NgModule({
  declarations: [
    ExampleUsingFrameworksComponent,
    AngularComponent,
    ReactComponent,
    VueComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExampleUsingFrameworksComponent,
      },
    ]),
  ],
})
export class ExampleUsingLabelModule {}
