import {
    ApplicationConfig,
    provideBrowserGlobalErrorListeners,
    provideZonelessChangeDetection,
} from '@angular/core'
import { provideRouter } from '@angular/router'

import { provideClientHydration, withEventReplay } from '@angular/platform-browser'
import { providePrimeNG } from 'primeng/config'
import { routes } from './app.routes'

import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { getAuth, provideAuth } from '@angular/fire/auth'
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { getFunctions, provideFunctions } from '@angular/fire/functions'
import { getStorage, provideStorage } from '@angular/fire/storage'
import Aura from '@primeuix/themes/aura'
import { environment } from '../environments/environment'
import { provideAnimations } from '@angular/platform-browser/animations'
import { MessageService } from 'primeng/api'
import { provideHttpClient } from '@angular/common/http'

export const appConfig: ApplicationConfig = {
    providers: [
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(),
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideAnimations(),
        providePrimeNG({
            theme: {
                preset: Aura,
            },
        }),
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
        provideStorage(() => getStorage()),
        MessageService,
    ],
}
