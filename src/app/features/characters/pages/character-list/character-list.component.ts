import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styles: [``],
  standalone: true,
  imports: [ButtonModule, RouterLink],
})
export class CharacterListComponent {}
