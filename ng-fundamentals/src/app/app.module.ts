import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppEventsComponent } from './app-events.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';

@NgModule({
  declarations: [
    AppEventsComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppEventsComponent]
})
export class AppModule { }
