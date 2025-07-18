import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function getbaseurl() {
  return environment.API_URL;
}

const provider = [
  { provide: 'baseurl', useFactory: getbaseurl, desp: [] }
]
platformBrowserDynamic(provider).bootstrapModule(AppModule)
  .catch(err => console.error(err));
