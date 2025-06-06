import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Für *ngFor
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router'; // wegen standalone
import { HeroSearchComponent } from '../hero-search/hero-search.component';


@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, RouterLink, HeroSearchComponent],
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}