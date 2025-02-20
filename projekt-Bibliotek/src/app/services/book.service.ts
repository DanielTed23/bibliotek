import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:7085/api/Books'; // Opdater URL’en efter behov



  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.apiUrl, book)
  }

  createBookWithGenres(book: Book, genreIds: number[]): Observable<Book> {
    const body = { ...book, genreIds };
    return this.http.post<Book>(`${this.apiUrl}/CreateWithGenres`, body);
  }
}
