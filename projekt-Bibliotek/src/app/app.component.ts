import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt-Bibliotek';

constructor(private location: Location) {}


// Holder styr på, om drawer'en er åben/(true) eller lukket/(false).
isBjaelkeOpen = false;

//Skifter tilstand for drawer'en mellem åben og lukket.
//Logger den nye tilstand i konsollen.
 
AAbenBjaelke() {
  this.isBjaelkeOpen = !this.isBjaelkeOpen; // Vend værdien af isDrawerOpen.
  console.log('Bjælke status', this.isBjaelkeOpen); // Debug: Udskriv den nye tilstand.
  }  

  goBack() {
    if (window.history.length > 1) {
      this.location.back(); // Naviger til forrige side
    } else {
      // Fallback til en specifik route, hvis der ikke er nogen historik
      this.location.go('/'); // Naviger til startsiden
    }
  }
}


