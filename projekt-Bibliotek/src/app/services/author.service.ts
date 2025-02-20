import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'https://localhost:7085/api/Authors'; // Opdater URL’en efter behov

  constructor(private http: HttpClient) {}

  // Metode til at oprette en ny forfatter
  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.apiUrl, author);
  }

  getAuthors(): Observable<Author[]>{
    return this.http.get<Author[]>(this.apiUrl);
  }
  
}