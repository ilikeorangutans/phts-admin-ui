import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { PathService } from './path.service';
import { Injectable } from '@angular/core';

import { Collection } from './../models/collection';
import { Album } from './../models/album';
import { Photo } from '../models/photo';

import { timer } from 'rxjs/observable/timer';

@Injectable()
export class AlbumService {

  constructor(
    private pathService: PathService,
    private http: HttpClient
  ) { }

  list(collection: Collection): Observable<Array<Album>> {
    const url = this.pathService.albumBase(collection);
    return this.http.get<PaginatedAlbums>(url)
      .map(resp => {
        return resp.data.map(album => {
          album.createdAt = new Date(album.createdAt);
          album.updatedAt = new Date(album.updatedAt);
          return album;
        });
      });
  }

  save(collection: Collection, album: Album): Promise<Album> {
    const url = this.pathService.albumBase(collection);
    return this.http.post<Album>(url, album).toPromise();
  }

  addPhotos(collection: Collection, album: Album, photos: Array<Photo>) {
    console.log(`adding ${photos.length} photos to album ${album.name}`);
    const url = this.pathService.albumPhotos(collection, album);
    console.log(url);

    const photoIDs = photos.map(p => p.id);
    const submission = new PhotoSubmission(album.id, photoIDs);

    this.http.post(url, submission).toPromise().then(x => console.log('success'));
  }

  details(collection: Collection, id: number): Observable<Album> {
    const url = this.pathService.albumDetails(collection, id);

    return this.http.get<Album>(url).map(album => {
      album.collection = collection;
      return album;
    });
  }

  delete(collection: Collection, album: Album): Observable<null> {
    const url = this.pathService.albumDetails(collection, album.id);

    return this.http.delete<null>(url);
  }

  setCoverPhoto(album: Album, photo: Photo): Observable<boolean> {
    const url = this.pathService.albumDetails(album.collection, album.id);
    console.log(url);

    album.coverPhotoID = photo.id;
    return this.http
      .post<Album>(url, album)
      .map(updatedAlbum => {
        return updatedAlbum.coverPhotoID === photo.id;
      });
  }
}

interface PaginatedAlbums {
  data: Album[];
}

class PhotoSubmission {
  constructor(
    private albumID: number,
    private photoIDs: Array<number>
  ) {}
}
