import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { StudentModule } from './app/student/student.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(StudentModule)
  .catch(err => console.error(err));
