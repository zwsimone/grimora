import { Component } from '@angular/core'
import { GridstackComponent, NgGridStackOptions } from 'gridstack/dist/angular'

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
            { minH: 2, minW: 8, selector: 'app-grid-text' },
            { minH: 2, minW: 8, selector: 'app-grid-text', input: { value: 'bar' } }, // custom input that works using BaseWidget.deserialize() Object.assign(this, w.input)
            { minH: 2, minW: 8, selector: 'app-grid-text' },
            { content: 'plain html' },
        ],
    }
}
