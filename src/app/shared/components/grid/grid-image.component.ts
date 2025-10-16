import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ref, Storage, uploadBytesResumable } from '@angular/fire/storage'
import { BaseWidget } from 'gridstack/dist/angular'
import { MessageService } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload'
import { ToastModule } from 'primeng/toast'

@Component({
    selector: 'app-grid-image',
    templateUrl: './grid-image.component.html',
    imports: [CommonModule, FileUploadModule, ToastModule, ButtonModule],
    standalone: true,
})
export class GridImageComponent extends BaseWidget {
    private readonly storage: Storage = inject(Storage)
    private readonly messageService: MessageService = inject(MessageService)

    onUpload(event: FileUploadEvent) {
        console.log(event)
        if (!event.files) {
            return
        }

        for (const file of event.files) {
            const storageRef = ref(this.storage, `images/${file.name}`)
            uploadBytesResumable(storageRef, file)
                .then(() => {
                    this.messageService.add({
                        severity: 'info',
                        summary: 'File Uploaded',
                        detail: file.name,
                    })
                })
                .catch((error) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Upload Failed',
                        detail: error.message,
                    })
                })
        }
    }
}
