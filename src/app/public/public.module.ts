import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app/app.component';
import { PublicRoutingModule } from './public-routing.module';

import { PathService } from './services/path.service';
import { ShareService } from './services/share.service';

import { ShareViewerComponent } from './share-viewer/share-viewer.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule
  ],
  declarations: [
    LandingComponent,
    AppComponent,
    ShareViewerComponent
  ],
  providers: [
    PathService,
    ShareService
  ]
})
export class PublicModule { }
