import { Component, Input, OnDestroy } from '@angular/core';
import {
  BaseWidget,
  GridstackComponent,
  GridstackItemComponent,
  NgCompInputs,
  NgGridStackOptions,
} from 'gridstack/dist/angular';

@Component({
  selector: 'app-character-editor',
  templateUrl: './character-editor.component.html',
  standalone: true,
  imports: [GridstackComponent],
})
export class CharacterEditorComponent {
  constructor() {}

  public gridOptions: NgGridStackOptions = {
    margin: 5,
    minRow: 1, // make space for empty message
    children: [
      { x: 0, y: 0, minW: 2, selector: 'app-a' },
      { x: 1, y: 0, minW: 2, selector: 'app-a', input: { text: 'bar' } }, // custom input that works using BaseWidget.deserialize() Object.assign(this, w.input)
      { x: 2, y: 0, selector: 'app-b' },
      { x: 3, y: 0, content: 'plain html' },
    ],
  };
}

// some custom components
@Component({
  selector: 'app-a',
  template: 'Comp A {{text}}',
})
export class AComponent extends BaseWidget implements OnDestroy {
  @Input() text: string = 'foo'; // test custom input data
  public override serialize(): NgCompInputs | undefined {
    return this.text ? { text: this.text } : undefined;
  }
  ngOnDestroy() {
    console.log('Comp A destroyed'); // test to make sure cleanup happens
  }
}

@Component({
  selector: 'app-b',
  template: 'Comp B',
})
export class BComponent extends BaseWidget {}
