import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000'; // Change this to the base URL of your Flask app

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/signin`, { username, password });
  }

  register(username: string, password1: string, password2: string) {
    return this.http.post<any>(`${this.baseUrl}/signup`, { username, password1, password2 });
  }

  isAuthenticated(): boolean {
    // Implement your authentication check logic here
    // For example, you can check if a user is logged in by checking if the authentication token exists in the browser's storage
    const authToken = localStorage.getItem('authToken');
    return !!authToken; // Return true if authToken exists, false otherwise
  }
}
