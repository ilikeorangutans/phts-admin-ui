import { SharedModule } from './shared/shared.module';
import { RenditionConfigurationService } from './services/rendition-configuration.service';
import { JWTInterceptor } from './services/jwt-interceptor';
import { AccountModule } from './account/account.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app/app.component';
import { ShareSiteModule } from './share-site/share-site.module';
import { ShareSiteService } from './services/share-site.service';
import { PathService } from './services/path.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { SessionService } from './services/session.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CollectionService } from './services/collection.service';
import { PhotoService } from './services/photo.service';
import { UploadQueueService } from './services/upload-queue.service';
import { ShareService } from './services/share.service';
import { AlbumService } from './services/album.service';
import { PhtsService } from './services/phts.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
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
  declarations: [
    DashboardComponent,
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  exports: [
  ]
})
export class AdminModule { }

