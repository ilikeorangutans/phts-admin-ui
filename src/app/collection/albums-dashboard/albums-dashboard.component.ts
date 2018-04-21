import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { CollectionStore } from './../../stores/collection.store';
import { RenditionConfigurationService } from './../../services/rendition-configuration.service';
import { Collection } from './../../models/collection';
import { AlbumService } from './../../services/album.service';
import { Album } from './../../models/album';

@Component({
  selector: 'app-albums-dashboard',
  templateUrl: './albums-dashboard.component.html',
  styleUrls: ['./albums-dashboard.component.css']
})
export class AlbumsDashboardComponent implements OnInit {

  private readonly _albums = new BehaviorSubject<Array<Album>>([]);
  albums: Observable<Array<Album>> = this._albums.asObservable();

  collection: Collection;
  album: Album = new Album();

  constructor(
    private collectionStore: CollectionStore,
    private albumService: AlbumService,
    private renditionConfigService: RenditionConfigurationService
  ) { }

  ngOnInit() {
    this.collectionStore.current
      .subscribe(collection => this.collection = collection);
    this.refreshAlbums();
  }

  refreshAlbums(): void {
    this.collectionStore.current
      .switchMap(collection => {
        return this.albumService.list(collection);
      })
      .first()
      .subscribe(albums => {
        this._albums.next(albums);
      });
  }

  onSubmit() {
    this.albumService.save(this.collection, this.album).then(a => {
      this.refreshAlbums();
    });
    this.album = new Album();
  }
}
