import { Routes } from '@angular/router'

export const CharacterRoutes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/character-list/character-list.component').then(
                (m) => m.CharacterListComponent
            ),
    },
    // {
    //   path: ':id',
    //   loadComponent: () =>
    //     import('./pages/character-detail/character-detail.component').then(
    //       (m) => m.CharacterDetailComponent,
    //     ),
    // },
    // {
    //   path: ':id/edit',
    //   loadComponent: () =>
    //     import('./pages/character-editor/character-editor.component').then(
    //       (m) => m.CharacterEditorComponent,
    //     ),
    // },
    {
        path: 'add',
        loadComponent: () =>
            import('./pages/character-editor/character-editor.component').then(
                (m) => m.CharacterEditorComponent
            ),
    },
]
