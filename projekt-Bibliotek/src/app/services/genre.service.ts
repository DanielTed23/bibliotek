import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private apiUrl = 'https://localhost:7085/api/Genres'; // Endpoint til backend

  constructor(private http: HttpClient) {}

  // Metode til at oprette en ny genre
  createGenre(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(this.apiUrl, genre);
  }

  getGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.apiUrl);
  }

  //deleteGenre(genreId)
  
}
