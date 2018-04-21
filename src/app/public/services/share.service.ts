import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PathService } from './path.service';
import { Share } from './../models/share';
import { Photo } from './../models/photo';
import { error } from 'util';

@Injectable()
export class ShareService {

  constructor(
    private http: HttpClient,
    private pathService: PathService
  ) { }

  forSlug(slug: string): Observable<Share> {
    const url = this.pathService.shareBySlug(slug);
    console.log(url);

    const y = this.http
      .get<ShareAndPhotoResponse>(url)
      .do(x => console.log('got response ', x))
      .map(resp => {
        const share = new Share();
        share.id = resp.share.id;
        share.slug = resp.share.slug;
        share.photos = resp.photos.map(p => {
          const photo = new Photo();
          photo.id = p.id;
          photo.renditions = p.renditions;
          return photo;
        });
        return share;
      });

    return y;
  }
}

export class ShareAndPhotoResponse {
  share: ShareResponse;
  photos: Array<Photo>;
}

export class ShareResponse {
  id: number;
  slug: string;
}

