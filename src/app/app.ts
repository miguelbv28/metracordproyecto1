import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header'; 
import { Footer } from './components/footer/footer'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer], // Ahora sí reconocerá a Header y Footer
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }