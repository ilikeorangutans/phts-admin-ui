import { Observable } from 'rxjs/Observable';
import { PathService } from './../services/path.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { ShareService } from './../services/share.service';
import { Share } from './../models/share';

@Component({
  selector: 'public-share-viewer',
  templateUrl: './share-viewer.component.html',
  styleUrls: ['./share-viewer.component.css']
})
export class ShareViewerComponent implements OnInit {

  private sub: Subscription;

  constructor(
    private shareService: ShareService,
    private pathService: PathService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  share: Observable<Share>;

  ngOnInit() {
    console.log('ShareViewer::ngOnInit()');
    this.title.setTitle('share');
    this.share = this.route.params
      .map(params => params['slug'] as string)
      .switchMap(slug => this.shareService.forSlug(slug));
  }

  renditionSrc(share: Share, renditionID: number): string {
    return this.pathService.renditionBySlug(share.slug, renditionID);
  }
}
