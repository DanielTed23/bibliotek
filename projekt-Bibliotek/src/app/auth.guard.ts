import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';


// Markerer denne klasse som en Angular service, der kan injiceres
@Injectable({
  providedIn: 'root', // Gør denne guard tilgængelig overalt i applikationen
})
export class AdminGuard implements CanActivate {
  // Konstruktoren injicerer UserService for at tjekke brugerens rolle og Router til navigation
  constructor(private userService: UserService, private router: Router) {}

  // Metode, der bestemmer, om en rute kan aktiveres (kan bruges i 'canActivate' i routen)
  canActivate(): boolean {
    // Tjekker, om brugeren er administrator
    const isAdmin = this.userService.isAdmin();
    console.log('AdminGuard: isAdmin =', isAdmin); // Log værdien for debugging

    // Hvis brugeren er administrator, tillades adgang til ruten
    if (isAdmin) {
      return true;
    }
  
    // Hvis brugeren ikke er administrator, omdirigeres til login-siden
    this.router.navigate(['/login']);
    return false;
  }
}

