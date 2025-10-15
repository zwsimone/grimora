import { CommonModule } from '@angular/common'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Editor } from '@tiptap/core'
import HighLight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular'
import { TiptapEditorDirective } from 'ngx-tiptap'
import { Level } from '@tiptap/extension-heading'
// PrimeNG modules
import { ButtonModule } from 'primeng/button'
import { SelectButtonModule } from 'primeng/selectbutton'
import { StyleClassModule } from 'primeng/styleclass'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { SelectModule } from 'primeng/select'

// some custom components
@Component({
    selector: 'app-grid-text',
    templateUrl: './grid-text.component.html',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TiptapEditorDirective,
        SelectButtonModule,
        ButtonModule,
        ToggleButtonModule,
        StyleClassModule,
        SelectModule,
    ],
})
export class GridTextComponent extends BaseWidget implements OnInit, OnDestroy {
    @Input() value: string | undefined // test custom input data

    justifyOptions = [
        { justify: 'left', icon: 'bi bi-text-left' },
        { justify: 'center', icon: 'bi bi-text-center' },
        { justify: 'right', icon: 'bi bi-text-right' },
        { justify: 'justify', icon: 'bi bi-justify' },
    ]

    formatOptions: { name: string; value: Level | '' }[] = [
        { name: 'Normal', value: '' },
        { name: 'Heading 1', value: 1 },
        { name: 'Heading 2', value: 2 },
        { name: 'Heading 3', value: 3 },
    ]
    selectedFormat: Level | '' = ''

    reactiveForm: FormGroup = new FormGroup({})

    editor = new Editor({
        extensions: [
            StarterKit,
            Placeholder,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            HighLight,
        ],
        editorProps: {
            attributes: {
                class: 'grid-text-editor',
                spellCheck: 'false',
            },
        },
    })

    public override serialize(): NgCompInputs | undefined {
        return this.value ? { value: this.value } : undefined
    }

    ngOnInit(): void {
        this.reactiveForm = new FormGroup({
            content: new FormControl(this.value),
        })
    }

    ngOnDestroy() {
        this.editor.destroy()
        console.log('GridTextComponent destroyed') // test to make sure cleanup happens
    }

    handleChange(value: string) {
        this.value = value
    }

    setHeading() {
        console.log(this.selectedFormat)

        if (!this.selectedFormat) {
            this.editor.chain().focus().setParagraph().run()
            return
        }
        this.editor.chain().focus().toggleHeading({ level: this.selectedFormat }).run()
    }
}
