import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient provider
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { UserService } from './app/services/user.service'; // Import UserService

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide routing
    provideHttpClient(),   // Provide HttpClient globally
    UserService            // Provide UserService globally
  ]
}).catch((err) => console.error(err));
