import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'characters', pathMatch: 'full' },
    { path: 'characters', loadChildren: () => import('./features/characters/character.routes').then(m => m.CharacterRoutes)}
];
