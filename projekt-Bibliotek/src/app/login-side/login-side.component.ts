import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-side',
  imports: [CommonModule, FormsModule, RouterModule],
  standalone: true,
  templateUrl: './login-side.component.html',
  styleUrls: ['./login-side.component.css'] 
})
export class LoginSideComponent  {
  email: string = ''; // Variabel til brugernavn
  password: string = ''; // Variabel til adgangskode
  errorMessage: string = '';



  //giver besked i consol log
  ngOnInit(): void {
    console.log('Du er blevet ført til Login siden');
  }

  constructor ( private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.email, this.password).subscribe({
      next: (user: User) => {
        // Sæt den aktuelle bruger i UserService
        this.userService.setCurrentUser(user);
        console.log('User set in UserService:', this.userService.getCurrentUser());
  
        // Tjek brugerens rolle
        if (user.isAdmin) {
          // Hvis brugeren er admin, naviger til adminsiden
          
          this.router.navigate(['/admin']);
        } else {
          // Hvis brugeren er en almindelig bruger, naviger til brugersiden
          this.router.navigate(['/user']);
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage = 'Forkert email eller password. Prøv igen.';
      }
    });
  }
}

