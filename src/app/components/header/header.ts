import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // <--- IMPORTANTE

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // <--- AÑADIR AQUÍ
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header { }