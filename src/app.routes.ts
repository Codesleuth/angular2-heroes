import { provideRouter, RouterConfig } from '@angular/router';
import { CrisisListComponent }  from './crisis-list.component';
import { HeroListComponent }    from './hero-list.component';

const routes: RouterConfig = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent },
  { path: '**', component: HeroListComponent }
];

export const ROUTER_PROVIDERS = [
  provideRouter(routes)
];
