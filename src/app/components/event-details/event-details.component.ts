import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { EventDTO } from '../event-listing/responseModel.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { response } from 'express';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  eventId: number = 0; // Initialze with a default value
  eventDetails: any; // Initialize as undefined

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private userService: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = +params['id']; // turns string into a number

      this.eventsService.getEventById(this.eventId).subscribe((response) => {
        this.eventDetails = response.data;
        console.log("Event Data: ", this.eventDetails);
        console.log(response.data.name);
      },
      error => {
        console.error("Error fetching event dtails: ", error)
      })
    })
  }

  onRSVP(): void {
    const userId = this.userService.getUserId();
    const authToken = this.userService.getAuthToken();
    
    if(userId && authToken) {
      this.eventsService.rsvpToEvent(this.eventId, userId, authToken).subscribe(
        response => {
          console.log("RSVP successful: ", response);
        },
        error => {
          console.error("Error RSVPing to event: ", error);
        }
      )
    }
  }
}
