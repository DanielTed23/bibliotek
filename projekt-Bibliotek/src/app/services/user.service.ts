import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:7085/api/Users'; // Backend API URL
  private currentUser: User | null = null; // Tilføj denne linje for at definere currentUser

  constructor(private http: HttpClient) {}

  // Opret en ny bruger
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  // Login-bruger
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { email, password });
  }

  // Sæt den aktuelle bruger
  setCurrentUser(user: User): void {
    this.currentUser = user;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Tjek om den aktuelle bruger er admin
  isAdmin(): boolean {
    return this.currentUser?.isAdmin || false;
  }


  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Slet en bruger baseret på ID
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
  
}
