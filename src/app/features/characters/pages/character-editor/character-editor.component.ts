import { Component } from '@angular/core';
import { GridstackComponent, NgGridStackOptions } from 'gridstack/dist/angular';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  standalone: true,
  imports: [GridstackComponent],
})
export class CharacterEditorComponent {
  public gridOptions: NgGridStackOptions = {
    margin: 5,
    minRow: 1, // make space for empty message
    children: [
      { x: 0, y: 0, minW: 2, selector: 'app-grid-text' },
      { x: 1, y: 0, minW: 2, selector: 'app-grid-text', input: { value: 'bar' } }, // custom input that works using BaseWidget.deserialize() Object.assign(this, w.input)
      { x: 2, y: 0, selector: 'app-grid-text' },
      { x: 3, y: 0, content: 'plain html' },
    ],
  };
}
