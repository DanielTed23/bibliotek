import { Routes } from '@angular/router';
import { LoginSideComponent } from './login-side/login-side.component'; // Importer componenten
import { AppComponent } from './app.component'; // Hvis AppComponent skal bruges som startside
import { OpretBrugerComponent } from './opret-bruger/opret-bruger.component'; // Importer componenten
import { UserSideComponent } from './user-side/user-side.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { SeBrugereComponent } from './se-brugere/se-brugere.component';
import { AdminGuard } from './auth.guard'; // Importér guarden


export const routes: Routes = [
    { path: '', component: AppComponent }, // AppComponent as the default page
    { path: 'login', component: LoginSideComponent }, // Login page
    {path: 'opret-bruger', component: OpretBrugerComponent }, // Tilføj route til Opret Bruger
    { path: 'user', component: UserSideComponent },
    { path: 'admin', component: AdminSideComponent, canActivate: [AdminGuard] },
    { path: 'sebrugere', component: SeBrugereComponent, canActivate: [AdminGuard] },
    { path: 'sebrugere', component: SeBrugereComponent },

     { path: '**', redirectTo: '/login' }, // Catch-all route
     
    

];
