import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridstackComponent } from 'gridstack/dist/angular';
import {
  AComponent,
  BComponent,
} from './features/characters/pages/character-editor/character-editor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('grimora');

  constructor() {
    GridstackComponent.addComponentToSelectorType([AComponent, BComponent]);
  }
}
