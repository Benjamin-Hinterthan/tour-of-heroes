import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink } from '@angular/router'; 

//import {HEROES} from '../mock-heroes';
import { 
  NgIf,
  NgFor,
  UpperCasePipe,
 } from '@angular/common'; // Pipe importieren da standalone
import {FormsModule} from '@angular/forms';


@Component({
    selector: 'app-heroes',
    imports: [
        FormsModule,
        //NgIf,
        NgFor,
        //UpperCasePipe,
        RouterLink
    ], //import hier einbinden
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;

  constructor(
    private heroService: HeroService, 
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
