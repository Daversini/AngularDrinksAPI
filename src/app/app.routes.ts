import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DrinkComponent } from './components/drink/drink.component';
import { DrinkRandomComponent } from './components/drink-random/drink-random.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'drink', component: DrinkComponent},
    { path: 'drink/random', component: DrinkRandomComponent}
];