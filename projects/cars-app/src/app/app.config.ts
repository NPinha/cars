import { ApplicationConfig } from '@angular/core';

import { routes } from './app.routes';
import { provideCore } from './core/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideCore({ routes }), provideHttpClient(withFetch())],
};
