import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserComponent } from './browser/browser.component';
import { AppComponent } from './app/app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { CollectionSettingsComponent } from './collection-settings/collection-settings.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { UploadQueueComponent } from './upload-queue/upload-queue.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoShareListComponent } from './photo-share-list/photo-share-list.component';
import { PhotoShareComponent } from './photo-share/photo-share.component';
import { AlbumsDashboardComponent } from './albums-dashboard/albums-dashboard.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SelectablePhotoContainerComponent } from './selectable-photo-container/selectable-photo-container.component';
import { PhotoSelectionComponent } from './photo-selection/photo-selection.component';
import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';
import { PhotoDetailLinkComponent } from './photo-detail-link/photo-detail-link.component';
import { AlbumCoverCardComponent } from './album-cover-card/album-cover-card.component';
import { CollectionNavBarComponent } from './collection-nav-bar/collection-nav-bar.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { CollectionPhotoListComponent } from './collection-photo-list/collection-photo-list.component';
import { SharedModule } from './../shared/shared.module';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CollectionRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    BrowserComponent,
    AppComponent,
    FormComponent,
    LandingComponent,
    CollectionSettingsComponent,
    PhotoUploadComponent,
    UploadQueueComponent,
    PhotoDetailsComponent,
    PhotoShareListComponent,
    PhotoShareComponent,
    AlbumsDashboardComponent,
    AlbumDetailsComponent,
    SelectablePhotoContainerComponent,
    PhotoSelectionComponent,
    PhotoThumbnailComponent,
    PhotoDetailLinkComponent,
    AlbumCoverCardComponent,
    CollectionNavBarComponent,
    PhotoCardComponent,
    CollectionCardComponent,
    CollectionPhotoListComponent,
    PhotoViewerComponent
  ]
})
export class CollectionModule { }
