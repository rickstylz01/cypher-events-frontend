import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, EventDTO } from 'src/app/components/event-listing/responseModel.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:9095'

  constructor(private http: HttpClient, private userService: UserService) { }

  getEvents(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/api/events/`);
  }

  getEventById(eventId: number): Observable<any> {
    return this.http.get<EventDTO>(`${this.apiUrl}/api/events/${eventId}/`);
  }

  rsvpToEvent(eventId: number, userId: string, authToken: string): Observable<any> {
    const token = this.userService.getAuthToken();
    const userNumber = this.userService.getUserId();
    console.log("authentications: " + token + "userId: " + userNumber);
    // create headers with the authentication token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<EventDTO>(
      `${this.apiUrl}/api/events/${eventId}/rsvp/${userId}/`, 
      userId,
      { headers: headers }
    );
  }
}
