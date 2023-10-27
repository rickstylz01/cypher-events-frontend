import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9095';
  private authTokenKey = 'authToken';
  private userIdKey = 'userId';

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}/auth/users/register/`, userData)
  }

  loginUser(userData: any) {
    return this.http.post(`${this.apiUrl}/auth/users/login/`, userData)
    .pipe(
      tap((response: any) => {
        this.saveAuthToken(response.jwt);
        this.saveUserId(response.user.id);
      })
    );
  }

  // Save the auth token to localStorage
  private saveAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  private saveUserId(userId: any): void {
    localStorage.setItem(this.userIdKey, userId);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  getUserId(): any | null {
    return localStorage.getItem(this.userIdKey)
  }

  logoutUser(): void {
    localStorage.removeItem(this.authTokenKey);
  }
}
