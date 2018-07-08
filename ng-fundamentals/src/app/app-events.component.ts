import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
  <app-nav></app-nav>
  <section class='section'>
    <app-events-list></app-events-list>
  </section>
  `
})
export class AppEventsComponent {
  title = 'app';
}
