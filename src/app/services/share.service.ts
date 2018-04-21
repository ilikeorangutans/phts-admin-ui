import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/do';
import { Share } from './../models/share';
import { Photo } from './../models/photo';
import { Collection } from './../models/collection';
import { HttpClient } from '@angular/common/http';
import { PathService } from './path.service';
import { Injectable } from '@angular/core';
import { ShareSite } from '../models/share-site';
import { RenditionConfiguration } from '../models/rendition-configuration';

@Injectable()
export class ShareService {

  constructor(
    private pathService: PathService,
    private http: HttpClient
  ) { }

  listForPhoto(collection: Collection, photo: Photo): Observable<Array<Share>> {
    const url = this.pathService.photoShares(collection, photo.id);

    return this.http.get<Array<Share>>(url)
      .map(response => {
        return response.map((share) => {
          share.createdAt = new Date(share.createdAt);
          share.updatedAt = new Date(share.updatedAt);

          return share;
        });
      });
  }

  save(collection: Collection, photo: Photo, share: ShareRequest): Observable<Share> {
    const url = this.pathService.photoShares(collection, photo.id);
    return this.http.post<Share>(url, share);
  }

  sharesForPhoto(collection: Collection, photo: Photo): PhotoShares {
    return new PhotoShares(
      this,
      collection,
      photo
    );
  }
}


export class PhotoShares {

  private readonly _all: BehaviorSubject<Array<Share>> = new BehaviorSubject<Array<Share>>([]);

  readonly all: Observable<Array<Share>> = this._all
    .asObservable()
    .share();

  constructor(
    readonly shareService: ShareService,
    readonly collection: Collection,
    readonly photo: Photo
  ) {
  }

  add(request: ShareRequest): Observable<Share> {
    const x = this.shareService.save(this.collection, this.photo, request).share();

    x.first().subscribe(_ => this.reload());

    return x;
  }

  reload() {
    this.shareService.listForPhoto(this.collection, this.photo)
      .first()
      .subscribe(shares => this._all.next(shares));
  }
}

export enum SlugStrategy {
  Static = 'static',
  Random = 'random'
}

export class ShareRequest {
  constructor(
    readonly photoID: number,
    public slug: string = '',
    public shareSiteID: number = 0,
    public slugStrategy: SlugStrategy = SlugStrategy.Random,
    public allowedRenditions: Array<number> = []
  ) {}
}
