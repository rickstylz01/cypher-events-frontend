export interface EventDTO {
  id: number;
  name: string;
  eventDate: string; 
  venue: string;
  description: string;
  participants: RSVPResponse[];
}

export interface RSVPResponse {
  id: number;
  userName: string;
  emailAddress: string;
  eventId: number;
  eventName: string;
  eventVenue: string;
  eventDescription: string;
}

export interface ApiResponse {
  data: EventDTO[];
  message: string;
}