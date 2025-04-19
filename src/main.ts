import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';  // Import importProvidersFrom
import { FormsModule } from '@angular/forms';  // Correct import for FormsModule
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { AppComponent } from './app/app.component';

const routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule)  // Correctly import FormsModule
  ]
});
