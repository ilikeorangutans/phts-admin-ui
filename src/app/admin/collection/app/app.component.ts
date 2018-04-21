import { AlbumStore } from './../../stores/album.store';
import { PhotoStore } from './../../stores/photo.store';
import { CollectionStore } from './../../stores/collection.store';
import { RenditionConfigurationService } from './../../services/rendition-configuration.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';

import { Collection } from './../../models/collection';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CollectionStore, PhotoStore]
})
export class AppComponent implements OnInit, OnDestroy {

  collection: Collection = null;

  constructor(
    private collectionStore: CollectionStore,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if (slug) {
        this.collectionStore.setCurrentBySlug(slug);
      } else {
        this.collection = null;
      }
    });

    this.collectionStore.current
      .subscribe(c => this.collection = c);
  }

  ngOnDestroy(): void {
  }
}
