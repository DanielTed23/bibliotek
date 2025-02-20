import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-se-brugere',
  imports: [CommonModule],
  templateUrl: './se-brugere.component.html',
  styleUrl: './se-brugere.component.css'
})
export class SeBrugereComponent implements OnInit {
  users: any[] = []; // Udskift `any` med den rigtige bruger-model, hvis du har en.

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (result) => {
        console.log('Hentede brugere:', result);
        this.users = result;
      },
      error: (err) => {
        console.error('Fejl ved hentning af brugere:', err);
      }
    });
  }
  getAllUsers(): void {
    this.userService.getUsers().subscribe({
      next: (result) => this.users = result,
      error: (error) => console.error('Kunne ikke hente brugerne:', error)
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Er du sikker på, at du vil slette denne bruger?')) {
        this.userService.deleteUser(userId).subscribe({
            next: () => {
                // Fjern brugeren fra listen efter sletning
                this.users = this.users.filter(user => user.userId !== userId);
                console.log('Bruger fjernet. Opdateret liste:', this.users);
            },
            error: (error) => console.error('Kunne ikke slette brugeren:', error)
        });
    }
}
  
}