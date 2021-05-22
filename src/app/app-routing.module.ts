import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ClearConsoleGuard } from './clear-console.guard';
import { HomeComponent } from './home/home.component';
import { PreloadStrategy } from './preload-strategy';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [ClearConsoleGuard],
    data: { preloadFrom: '*' },
  },
  {
    path: 'label-example',
    loadChildren: () =>
      import('./example-using-label/example-using-label.module').then(
        (m) => m.ExampleUsingLabelModule
      ),
    data: { preloadFrom: '/' },
  },
  {
    path: 'input-example',
    loadChildren: () =>
      import('./example-using-input/example-using-input.module').then(
        (m) => m.ExampleUsingInputModule
      ),
    data: { preloadFrom: '/' },
  },
  {
    path: 'frameworks-example',
    loadChildren: () =>
      import('./example-using-frameworks/example-using-frameworks.module').then(
        (m) => m.ExampleUsingLabelModule
      ),
    data: { preloadFrom: '/' },
  },
  {
    path: 'color-schemes',
    loadChildren: () =>
      import('./color-schemes-doc/color-schemes-doc.module').then(
        (m) => m.ColorSchemesDocModule
      ),
    data: { preloadFrom: '*' },
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
