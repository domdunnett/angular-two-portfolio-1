import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { TechComponent } from './tech/tech.component';
import { AboutComponent } from './about/about.component';
import { TravelComponent } from './travel/travel.component';

@Component({
  selector: 'portfolio',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  styleUrls: ['app/app.component.css']
})

@RouteConfig([
  {
    path: '/about',
    name: 'About',
    component: AboutComponent,
    useAsDefault: true
  },
  {
    path: '/tech',
    name: 'Tech',
    component: TechComponent
  },
  {
    path: '/travel',
    name: 'Travel',
    component: TravelComponent
  }
])

export class AppComponent {
  title = 'Dom Dunnett'
  logo = 'Logo.svg'

  onResize(event : any) {
    if (event.target.innerWidth < 1000)
      this.logo = 'smallLogo.svg'
  }
}
