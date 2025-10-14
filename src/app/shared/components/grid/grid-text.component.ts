import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';
import { TiptapEditorDirective } from 'ngx-tiptap';
import { Editor } from '@tiptap/core';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Code from '@tiptap/extension-code';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';

// PrimeNG modules
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { StyleClassModule } from 'primeng/styleclass';

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
    SelectButtonModule,
    ButtonModule,
    ToggleButtonModule,
    StyleClassModule,
  ],
})
export class GridTextComponent extends BaseWidget implements OnDestroy {
  @Input() value: string = '<p>Hello, Tiptap!</p>'; // test custom input data

  justifyOptions = [
    { justify: 'left', icon: 'bi bi-text-left' },
    { justify: 'center', icon: 'bi bi-text-center' },
    { justify: 'right', icon: 'bi bi-text-right' },
    { justify: 'justify', icon: 'bi bi-justify' },
  ];

  reactiveForm = new FormGroup({
    content: new FormControl(this.value),
  });

  editor = new Editor({
    extensions: [
      StarterKit,
      Placeholder,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Code,
      Strike,
      Underline,
      Highlight,
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https', 'mailto'],
      }),
    ],
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
