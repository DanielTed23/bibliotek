import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service'; // Import UserService
import { User } from '../models/user';

// Angular component, der håndterer oprettelse af brugere
@Component({
  selector: 'app-opret-bruger',
  // Importer nødvendige moduler til komponenten
  imports: [RouterModule, FormsModule, CommonModule],
  standalone: true,
  templateUrl: './opret-bruger.component.html',
  styleUrls: ['./opret-bruger.component.css'],
})
export class OpretBrugerComponent implements OnInit {
  // Initialiserer en tom bruger som standard
  user: User = {
    userId: 0, // Backend vil generere dette ID
    firstName: '',
    email: '',
    phoneNumber: '',
    password: '',
    isAdmin: false // Standard er, at brugeren ikke er admin
  };

  // Konstruktoren injicerer UserService for at gøre det muligt at kommunikere med backend
  constructor(private userService: UserService) {}

  // Lifecycle-hook: Kører, når komponenten bliver initialiseret
  ngOnInit(): void {
    console.log('Du er blevet ført til Opretbruger siden');
  }

  // Denne metode kaldes, når formularen bliver indsendt
  onSubmit(): void {
    console.log('Formular indsendt:', this.user);

    // Kald UserService for at oprette en ny bruger
    this.userService.createUser(this.user).subscribe({
      // Håndter succesfuldt svar fra serveren
      next: (response) => {
        console.log('Bruger oprettet:', response);
        alert('Bruger oprettet succesfuldt!');
      },
      // Håndter fejl fra serveren
      error: (error) => {
        console.error('Fejl ved oprettelse af bruger:', error);
        alert('Der opstod en fejl ved oprettelse af brugeren.');
      },
    });
  }
}
