import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PhtsService } from './services/phts.service';
import { AlbumService } from './services/album.service';
import { ShareService } from './services/share.service';
import { UploadQueueService } from './services/upload-queue.service';
import { PhotoService } from './services/photo.service';
import { RenditionConfigurationService } from './services/rendition-configuration.service';
import { CollectionService } from './services/collection.service';
import { SessionService } from './services/session.service';
import { JWTInterceptor } from './services/jwt-interceptor';
import { ShareSiteService } from './services/share-site.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PathService } from './services/path.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminShellComponent } from './admin-shell/admin-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NotFoundComponent,
    AdminShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('/admin/ngsw-worker.js', { enabled: environment.production }),
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ShareSiteService,
    PathService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    SessionService,
    CollectionService,
    RenditionConfigurationService,
    PhotoService,
    UploadQueueService,
    ShareService,
    AlbumService,
    PhtsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
