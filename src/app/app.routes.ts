import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: Nosotros },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: 'inicio' } // Si escriben cualquier otra cosa, vuelve al inicio
];