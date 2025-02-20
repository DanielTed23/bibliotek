import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Author } from '../models/author';
import { AuthorService } from '../services/author.service';
import { Genre } from '../models/genre';
import { GenreService } from '../services/genre.service';
import { Book } from '../models/books';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-side',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-side.component.html',
  styleUrls: ['./admin-side.component.css']
})
export class AdminSideComponent implements OnInit {
  // Initialiserer variabler til forfatter, genre og bog samt tilhørende succes- og fejlmeddelelser
  author: Author = new Author();
  successMessage: string = '';
  errorMessage: string = '';

  genre: Genre = new Genre();
  genreSuccessMessage: string = '';
  genreErrorMessage: string = '';

  book: Book = new Book();
  bookSuccessMessage: string = '';
  bookErrorMessage: string = '';

  // Lister over forfattere og genrer, der bruges til at udfylde dropdowns
  authors: Author[] = [];
  genres: Genre[] = [];

  // En liste til at gemme de valgte genre-IDs
  selectedGenreIds: number[] = [];

  // Dependency injection af nødvendige services og routeren
  constructor(
    private authorService: AuthorService,
    private genreService: GenreService,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Når komponenten initialiseres, hentes data for forfattere og genrer
    console.log('Du er blevet ført til Admin siden');

    // Henter forfattere og gemmer dem i authors-listen
    this.authorService.getAuthors().subscribe({
      next: (result) => {
        this.authors = result;
      },
      error: (error) => {
        console.error('Fejl ved indlæsning af forfattere: ', error);
      }
    });

    // Henter genrer og gemmer dem i genres-listen
    this.genreService.getGenres().subscribe({
      next: (result) => {
        this.genres = result;
      },
      error: (error) => {
        console.error('Fejl ved indlæsning af genrer: ', error);
      }
    });
  }

  // Opretter en ny forfatter via authorService og viser meddelelser baseret på resultatet
  createAuthor(): void {
    this.authorService.createAuthor(this.author).subscribe({
      next: (result) => {
        this.successMessage = `Forfatter oprettet: ${result.firstName} ${result.lastName}`;
        this.author = new Author();
      },
      error: (error) => {
        this.errorMessage = `Noget gik galt: ${error.message}`;
      }
    });
  }

  // Opretter en ny genre via genreService og viser meddelelser baseret på resultatet
  createGenre(): void {
    this.genreService.createGenre(this.genre).subscribe({
      next: (result) => {
        this.genreSuccessMessage = `Genre '${result.genreName}' oprettet.`;
        this.genre = new Genre();
      },
      error: (error) => {
        this.genreErrorMessage = `Fejl ved oprettelse: ${error.message}`;
      }
    });
  }

  // // Opretter en ny bog uden genrer
  // createBook(): void {
  //   this.bookService.createBook(this.book).subscribe({
  //     next: (result) => {
  //       this.bookSuccessMessage = `Bogen '${result.title}' blev oprettet.`;
  //       this.book = new Book();
  //     },
  //     error: (error) => {
  //       this.bookErrorMessage = `Fejl ved oprettelse: ${error.message}`;
  //     }
  //   });
  // }

  // Opretter en ny bog og tildeler genrer
  createBookWithGenres(): void {
    this.bookService.createBookWithGenres(this.book, this.selectedGenreIds).subscribe({
      next: (result) => {
        console.log('Bogen blev oprettet sammen med genrer:', result);
      },
      error: (err) => {
        console.error('Fejl under oprettelse af bogen:', err);
      }
    });
  }

  // Håndterer filvalg og sætter coverImageUrl til filens navn
  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Valgt fil:', this.selectedFile);

      // Sæt coverImageUrl til filens navn eller en relevant URL
      this.book.coverImageUrl = this.selectedFile.name; // eller en URL baseret på filen
    }
  }

  // Navigerer til siden med brugere
  goToSeBrugere(): void {
    this.router.navigate(['/sebrugere']);
  }

  // Navigerer til siden med bøger
  goToSeBooks(): void {
    this.router.navigate(['/seBook']);
  }

  // Navigerer til siden med genrer
  goToSeGenres(): void {
    this.router.navigate(['/seGenre']);
  }

  // Navigerer til siden med forfattere
  goToseForfatter(): void {
    this.router.navigate(['/seForfattere']);
  }
}
