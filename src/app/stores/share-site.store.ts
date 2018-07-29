import { ShareSiteService } from './../services/share-site.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShareSite } from '../models/share-site';
import 'rxjs/add/operator/first';
import { Injectable } from '@angular/core';

@Injectable()
export class ShareSiteStore {

  private readonly _all = new BehaviorSubject<Array<ShareSite>>([]);

  readonly all: Observable<Array<ShareSite>> = this._all.asObservable();

  constructor(
    private readonly shareSiteService: ShareSiteService
  ) {}

  refresh(): void {
    this.shareSiteService.list().first().subscribe(sites => this._all.next(sites));
  }

  delete(shareSite: ShareSite): void {
    console.log('implement me!');
  }

  save(shareSite: ShareSite): void {
    console.log('saving share site');
    this.shareSiteService.save(shareSite)
      .first()
      .subscribe(_ => this.refresh());
  }
}
