import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;

  // adding a public property to allow the parent component to reference it
  debugName: String = 'Submit';

  constructor() { }

  ngOnInit() {
  }

  // adding a public method to allow the parent component to use it
  debugMessage() {
    console.log('This child component of X is logging a message.');
  }

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am')
      return 'green bold'
    return ''
  }
}
