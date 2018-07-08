import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppEventsComponent } from './app-events.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppEventsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppEventsComponent]
})
export class AppModule { }
