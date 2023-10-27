import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, EventDTO } from 'src/app/components/event-listing/responseModel.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:9095'

  constructor(private http: HttpClient) { }

  getEvents(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/api/events/`);
  }

  getEventById(eventId: number): Observable<any> {
    return this.http.get<EventDTO>(`${this.apiUrl}/api/events/${eventId}/`);
  }

  rsvpToEvent(eventId: number, userId: number): Observable<any> {
    return this.http.post<EventDTO>(`${this.apiUrl}/api/events/${eventId}/rsvp/${userId}/`, userId)
  }
}
