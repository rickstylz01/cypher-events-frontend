import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { EventDTO } from './responseModel.model';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {
  events: EventDTO[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(response => {
      this.events = response.data ?? [];
      console.log("data: ", this.events)
    })
  }
}
