import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links = [
    { title: 'L\'application', url: '/application' },
    { title: 'Le lancement', url: '/lancement' },
    { title: 'Le développement', url: '/developpement' },
    // { title: 'Recommendations', fragment: '/lancement' }
  ];

  constructor(public route: Router) {
  }
}
