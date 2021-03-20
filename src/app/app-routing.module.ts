import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ClearConsoleGuard } from './clear-console.guard';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [ClearConsoleGuard],
  },
  {
    path: 'label-example',
    loadChildren: () =>
      import('./example-using-label/example-using-label.module').then(
        (m) => m.ExampleUsingLabelModule
      ),
    canLoad: [ClearConsoleGuard],
  },
  {
    path: 'input-example',
    loadChildren: () =>
      import('./example-using-input/example-using-input.module').then(
        (m) => m.ExampleUsingInputModule
      ),
    canLoad: [ClearConsoleGuard],
  },
  {
    path: 'frameworks-example',
    loadChildren: () =>
      import('./example-using-frameworks/example-using-frameworks.module').then(
        (m) => m.ExampleUsingLabelModule
      ),
    canLoad: [ClearConsoleGuard],
  },
  {
    path: 'color-schemes',
    loadChildren: () =>
      import('./color-schemes-doc/color-schemes-doc.module').then(
        (m) => m.ColorSchemesDocModule
      ),
    canLoad: [ClearConsoleGuard],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
