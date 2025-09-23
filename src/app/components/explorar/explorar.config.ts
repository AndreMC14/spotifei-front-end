import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from './explorar.routes';

export const explorarConfig: ApplicationConfig = {
    providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes)]
};
