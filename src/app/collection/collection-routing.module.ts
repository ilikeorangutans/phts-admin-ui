import { CollectionPhotoListComponent } from './collection-photo-list/collection-photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumsDashboardComponent } from './albums-dashboard/albums-dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { CollectionSettingsComponent } from './collection-settings/collection-settings.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
      }
    ]
  },
  {
    path: ':slug',
    component: AppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
      {
        path: 'overview',
        component: LandingComponent
      },
      {
        path: 'photos',
        component: CollectionPhotoListComponent
      },
      {
        path: 'photos/:photo_id',
        component: PhotoDetailsComponent
      },
      {
        path: 'settings',
        component: CollectionSettingsComponent
      },
      {
        path: 'albums',
        component: AlbumsDashboardComponent,
      },
      {
        path: 'albums/:album_id',
        component: AlbumDetailsComponent
      },
      {
        path: 'albums/:album_id/photos',
        component: AlbumDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
