import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { GridstackComponent } from 'gridstack/dist/angular'
import { GridTextComponent } from '@shared/components/grid/grid-text.component'
import { GridImageComponent } from '@shared/components/grid/grid-image.component'

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.scss',
})
export class App {
    protected readonly title = signal('grimora')

    constructor() {
        GridstackComponent.addComponentToSelectorType([GridTextComponent, GridImageComponent])
    }
}
