import {Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {GameComponent} from './game/game.component';

export const appRoutes
: Routes = [
    {path: 'landing', component: LandingComponent},
    {path: 'game', component: GameComponent},
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: '**', redirectTo: 'landing', pathMatch: 'full'},
];
