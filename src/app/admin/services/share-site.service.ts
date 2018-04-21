import { Observable } from 'rxjs/Observable';
import { AuthService } from './../auth.service';
import { PathService } from './path.service';
import { Injectable } from '@angular/core';
import { ShareSite } from '../models/share-site';
import { SessionService } from './session.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShareSiteService {

  constructor(
    private pathService: PathService,
    private http: HttpClient
  ) { }

  list(): Observable<Array<ShareSite>> {
    const url = this.pathService.shareSites();

    return this.http
      .get<Array<ShareSite>>(url)
      .map(records => {
        return records
          .map(r => {
            r.createdAt = new Date(r.createdAt);
            r.updatedAt = new Date(r.updatedAt);
            return r;
          });
      });
  }

  save(shareSite: ShareSite): Promise<ShareSite> {
    const url = this.pathService.shareSites();
    return this.http.post<ShareSite>(url, shareSite)
      .toPromise()
      .then((response) => {
        return response;
      });
  }
}
