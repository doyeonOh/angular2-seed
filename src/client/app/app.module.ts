import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from 'angular2-google-maps/core/index.js';
import { provideLazyMapsAPILoaderConfig } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AboutModule,
    HomeModule,
    SharedModule.forRoot(),
    AgmCoreModule.forRoot()
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    provideLazyMapsAPILoaderConfig({
      apiKey: 'key',
      clientId: ''
    })
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
