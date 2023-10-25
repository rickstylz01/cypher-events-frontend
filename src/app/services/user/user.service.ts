import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9095'

  constructor(private http: HttpClientModule) { }

  getUsername(): string {
    return 'Link';
  }
}
