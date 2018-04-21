import { Album } from './../models/album';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Collection } from '../models/collection';
import { Rendition } from '../models/rendition';
import { isDevMode } from '@angular/core';

@Injectable()
export class PathService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  apiHost(): string {
    let base = this.document.baseURI;
    if (isDevMode()) {
      base = 'http://localhost:8080';
    }

    if (base.endsWith('/')) {
      base = base.substring(0, base.length - 1);
    }

    return base;
  }

  apiBase(): string {
    return [this.apiHost(), 'admin/api'].join('/');
  }

  version(): string {
    return [this.apiBase(), 'version'].join('/');
  }

  authenticate(): string {
    return [this.apiBase(), 'authenticate'].join('/');
  }

  changePassword(): string {
    return [this.apiBase(), 'account', 'password'].join('/');
  }

  collections(): string {
    return [this.apiBase(), 'collections'].join('/');
  }

  collection(slug: string): string {
    return [this.collections(), slug].join('/');
  }

  uploadPhoto(collection: Collection): string {
    return [this.collection(collection.slug), 'photos'].join('/');
  }

  recentPhotos(collection: Collection): string {
    return [this.collection(collection.slug), 'photos/recent'].join('/');
  }

  rendition(collection: Collection, rendition: Rendition): string {
    return [this.collection(collection.slug), 'photos/renditions', rendition.id].join('/');
  }

  renditionConfigurations(collection: Collection): string {
    return [this.collection(collection.slug), 'rendition_configurations'].join('/');
  }

  showPhoto(collection: Collection, photoID: number): string {
    return [this.collection(collection.slug), 'photos', photoID].join('/');
  }

  listPhotos(collection: Collection): string {
    return [this.collection(collection.slug), 'photos'].join('/');
  }

  shareSites(): string {
    return [this.apiBase(), 'share-sites'].join('/');
  }

  photoShares(collection: Collection, photoID: number): string {
    return [this.collection(collection.slug), 'photos', photoID, 'shares'].join('/');
  }

  albumBase(collection: Collection): string {
    return [this.collection(collection.slug), 'albums'].join('/');
  }

  albumDetails(collection: Collection, id: number): string {
    return [this.albumBase(collection), id].join('/');
  }

  albumPhotos(collection: Collection, album: Album): string {
    return [this.albumDetails(collection, album.id), 'photos'].join('/');
  }

}
