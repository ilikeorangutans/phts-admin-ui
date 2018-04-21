import { PhotoShares, ShareService } from './../../services/share.service';
import { CollectionStore } from './../../stores/collection.store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Collection } from './../../models/collection';
import { Photo } from './../../models/photo';
import { Rendition } from '../../models/rendition';
import { RenditionConfiguration } from './../../models/rendition-configuration';
import { PhotoService } from './../../services/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  photo: Observable<Photo>;
  collection: Collection;
  configs: Array<RenditionConfiguration>;

  previewRendition: RenditionConfiguration;
  shares: PhotoShares;

  constructor(
    private collectionStore: CollectionStore,
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private shareService: ShareService
  ) { }

  setCollection(collection: Collection) {
    this.collection = collection;
    this.configs = collection.renditionConfigurations;
    this.previewRendition = this.configs.find(rc => rc.name === 'admin preview');

    this.photo = this.activatedRoute.params
      .map(params => +params['photo_id'])
      .switchMap(photoID => this.photoService.byID(this.collection, photoID, []));

    this.photo.first().subscribe(photo => this.shares = new PhotoShares(this.shareService, this.collection, photo));
  }

  ngOnInit() {
    this.collectionStore.current.first().subscribe(collection => this.setCollection(collection));
  }

  ngOnDestroy(): void {

  }

  configByRendition(rendition: Rendition): RenditionConfiguration {
    return this.configs.find((c) => c.id === rendition.renditionConfigurationID);
  }

  selectPreview(configID: number) {
    this.previewRendition = this.configs.find(r => r.id === configID);
  }

  delete(photo: Photo): void {
    if (!confirm('Delete photo?')) {
      return;
    }
    this.photoService.delete(this.collection, photo);
    this.router.navigate(['admin', 'collection', this.collection.slug]);
  }
}
