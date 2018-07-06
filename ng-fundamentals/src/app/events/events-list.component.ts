import { Component } from '@angular/core';

@Component({
    selector: 'app-events-list',
    template: `
    <div class='box'>
        <h1 class='title is-1'>Upcoming Concerts</h1>
        <hr>
        <div class='notification is-success'> {{ event.name }} </div>
        <table class='table is-fullwidth'>
            <thead>
                <th>Date</th>
                <th>Time</th>
                <th>Price</th>
                <th>Genre(s)</th>
            </thead>
            <tbody>
                <tr>
                    <td> {{ event.date }} </td>
                    <td> {{ event.time }} </td>
                    <td> \${{ event.price }} </td>
                    <td> {{ event.genres }} </td>
                </tr>
            </tbody>
        </table>
    </div>
    `
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Big Techno Tour',
        date: '3/8/2011',
        time: '8:45 PM',
        price: 499.99,
        genres: ['electro', 'house', 'dnb', 'techno'],
    }
}
