import { Component } from '@angular/core';
//import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule, RouterOutlet } from '@angular/router'; // ← Wichtig!
import { RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [MessagesComponent, RouterOutlet, RouterModule, RouterLinkActive],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
