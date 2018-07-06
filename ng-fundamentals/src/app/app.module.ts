import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppEventsComponent } from './app-events.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  declarations: [
    AppEventsComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppEventsComponent]
})
export class AppModule { }
