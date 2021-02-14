import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabelComponent } from './example-using-label/label/label.component';
import { ExampleUsingLabelComponent } from './example-using-label/example-using-label.component';

@NgModule({
  declarations: [AppComponent, LabelComponent, ExampleUsingLabelComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
