import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppEventsComponent } from './app-events.component';

@NgModule({
  declarations: [
    AppEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppEventsComponent]
})
export class AppModule { }
