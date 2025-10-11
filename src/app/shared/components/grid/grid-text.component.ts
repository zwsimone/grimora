import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';
import { TiptapEditorDirective } from 'ngx-tiptap';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Bold, Heading1, Italic, LucideAngularModule, Pilcrow } from 'lucide-angular';

// some custom components
@Component({
  selector: 'app-grid-text',
  templateUrl: './grid-text.component.html',
  styleUrls: ['./editor.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TiptapEditorDirective,
    LucideAngularModule,
  ],
})
export class GridTextComponent extends BaseWidget implements OnDestroy {
  @Input() value: string = '<p>Hello, Tiptap!</p>'; // test custom input data

  readonly Heading1 = Heading1;
  readonly Bold = Bold;
  readonly Italic = Italic;
  readonly Pilcrow = Pilcrow;

  reactiveForm = new FormGroup({
    content: new FormControl(this.value),
  });

  editor = new Editor({
    extensions: [StarterKit, Placeholder],
    editorProps: {
      attributes: {
        class: 'grid-text-editor',
        spellCheck: 'false',
      },
    },
  });

  public override serialize(): NgCompInputs | undefined {
    return this.value ? { text: this.value } : undefined;
  }
  ngOnDestroy() {
    this.editor.destroy();
    console.log('GridTextComponent destroyed'); // test to make sure cleanup happens
  }
  handleChange(value: string) {
    this.value = value;
  }
}
