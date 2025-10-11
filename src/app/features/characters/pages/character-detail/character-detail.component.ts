import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styles: [``],
  standalone: true,
  imports: [ImageModule],
})
export class CharacterDetailComponent {}
