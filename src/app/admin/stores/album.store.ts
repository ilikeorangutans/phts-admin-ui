import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/combineLatest';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Collection } from './../models/collection';
import { PhotoService } from './../services/photo.service';
import { Paginator } from './../models/paginator';
import { Photo } from './../models/photo';
import { Observable } from 'rxjs/Observable';
import { Album } from './../models/album';
import { AlbumService } from './../services/album.service';


@Injectable()
export class AlbumStore {

  private readonly _list: BehaviorSubject<Array<Photo>> = new BehaviorSubject<Array<Photo>>([]);

  readonly list: Observable<Array<Photo>> = this._list.asObservable();

  constructor(
    private readonly collection: Collection,
    private readonly album: Album,
    private readonly photoService: PhotoService
  ) { }

  loadPhotos(paginator: Paginator): void {
    this.photoService.listAlbum(this.collection, this.album, paginator)
      .first()
      .subscribe(photos => this._list.next(photos));
  }
}
