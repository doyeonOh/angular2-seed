import { Component } from '@angular/core';
import { Config} from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styles: [`
    .sebm-google-map-container {
      height: 300px;
    }
  `]
})

export class AppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {
    console.log('Environment config', Config);
  }
}
