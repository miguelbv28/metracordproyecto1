import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private interval: any;

  technologies = [
  { name: 'HTML', img: 'img/html.png' },
  { name: 'CSS', img: 'img/css.png' },
  { name: 'JavaScript', img: 'img/js.png' },
  { name: 'PHP', img: 'img/php.png' },
  { name: 'MySQL', img: 'img/sql.png' },
  { name: 'Git', img: 'img/git.png' },
  { name: 'Node.js', img: 'img/node.png' }
];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.technologies.length;
    }, 2000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}