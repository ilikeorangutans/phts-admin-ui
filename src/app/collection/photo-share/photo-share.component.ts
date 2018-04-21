import { Observable } from 'rxjs/Observable';
import { PhotoShares, ShareRequest, SlugStrategy } from './../../services/share.service';
import { Component, Input, OnInit } from '@angular/core';

import { Collection } from './../../models/collection';
import { Photo } from './../../models/photo';
import { Share } from './../../models/share';
import { ShareService } from '../../services/share.service';
import { ShareSiteService } from './../../services/share-site.service';
import { ShareSite } from '../../models/share-site';
import { RenditionConfiguration } from '../../models/rendition-configuration';

@Component({
  selector: 'collection-photo-share',
  templateUrl: './photo-share.component.html',
  styleUrls: ['./photo-share.component.css']
})
export class PhotoShareComponent implements OnInit {

  @Input() photoShares: PhotoShares;
  @Input() collection: Collection;
  @Input() photo: Photo;
  @Input() renditionConfigurations: Array<RenditionConfiguration> = [];
  share: ShareRequest;
  shareSites: Observable<Array<ShareSite>>;

  constructor(
    private shareService: ShareService,
    private shareSiteService: ShareSiteService
  ) { }

  ngOnInit() {
    this.shareSites = this.shareSiteService.list();
    this.share = new ShareRequest(this.photo.id);
  }

  onSubmit() {
    const x = this.photoShares.add(this.share);
    x.subscribe(bla => console.log('share added', bla));
    this.share = new ShareRequest(this.photo.id);
  }
}
