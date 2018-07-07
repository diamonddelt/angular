import { Component } from '@angular/core';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Big Techno Tour',
        date: '3/8/2011',
        time: '8:45 PM',
        price: 499.99,
        genres: ['electro', 'house', 'dnb', 'techno'],
    }
}
