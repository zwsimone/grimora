import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-character-list',
  template: ` <p-button label="Navigate to detail" routerLink="/characters/1"></p-button> `,
  styles: [``],
  standalone: true,
  imports: [ButtonModule, RouterLink],
})
export class CharacterListComponent {}
