import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/components/event-listing/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:9095'

  constructor(private http: HttpClient) { }

  getEvents(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/api/events/`);
  }
}
