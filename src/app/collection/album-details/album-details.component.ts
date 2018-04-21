import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/observable/combineLatest';
import 'rxjs/add/operator/mergeMap';
import { share } from 'rxjs/operators/share';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { AlbumStore } from './../../stores/album.store';
import { Paginator } from '../../models/paginator';
import { RenditionConfiguration } from './../../models/rendition-configuration';
import { Photo } from './../../models/photo';
import { Album } from './../../models/album';
import { Collection } from './../../models/collection';
import { AlbumService } from './../../services/album.service';
import { CollectionStore } from '../../stores/collection.store';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit, OnDestroy {
  paginator: Paginator;

  album: Observable<Album>;
  photos: Observable<Array<Photo>>;
  collection: Collection;
  thumbnailRendition: RenditionConfiguration;

  albumStore: AlbumStore;

  constructor(
    private collectionStore: CollectionStore,
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) { }

  ngOnInit() {
    this.paginator = Paginator.newTimestampPaginator('updated_at');

    this.album = combineLatest(this.collectionStore.current, this.route.params)
      .switchMap(([collection, params]) => {
        const id = +params['album_id'];
        this.collection = collection;

        this.thumbnailRendition = this.collection.renditionConfigurations.find(c => c.name === 'admin thumbnails');

        return this.albumService.details(collection, id);
      }).pipe(share());

    this.album.first().subscribe(album => {
      this.albumStore = this.collectionStore.albumStore(album);
      this.albumStore.loadPhotos(this.paginator);
      this.photos = this.albumStore.list;
    });
  }

  ngOnDestroy(): void {

  }

  delete(album: Album): void {
    if (!confirm(`Delete album ${album.name}?`)) {
      return;
    }
    this.albumService.delete(album.collection, album).subscribe(_ => this.router.navigate([`/admin/collection/${this.collection.slug}`]));
  }

  onPhotoClicked(photo: Photo): void {
    console.log('onPhotoClicked', photo);
    alert(`show full screen preview of photo ${photo.id}`);
  }

  setCoverPhoto(album: Album, photo: Photo): void {
    this.albumService.setCoverPhoto(album, photo).subscribe(success => console.log('cover photo change success', success));
  }

  toggleOrganizePhotos(): void {
    alert('TODO: enter organize mode');
  }

  shareAlbumDialog(): void {
    alert('TODO: share album dialog');
  }
}
