import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderContainerComponent } from './components/slider-container/slider-container.component';
import { SliderChildComponent } from './components/slider-child/slider-child.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderContainerComponent,
    SliderChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
