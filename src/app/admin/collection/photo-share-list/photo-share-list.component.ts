import { Share } from './../../models/share';
import { RenditionConfiguration } from './../../models/rendition-configuration';
import { Component, Input, OnInit } from '@angular/core';

import { PhotoShares } from './../../services/share.service';

@Component({
  selector: 'collection-photo-share-list',
  templateUrl: './photo-share-list.component.html',
  styleUrls: ['./photo-share-list.component.css']
})
export class PhotoShareListComponent implements OnInit {

  @Input() photoShares: PhotoShares;

  ngOnInit() {
    this.photoShares.reload();
  }

  renditionClasses(config: RenditionConfiguration) {
    return {
      'badge-secondary': config.resize,
      'badge-primary': !config.resize
    };
  }

  delete(share: Share) {
    if (!confirm('Delete?')) {
      return;
    }

    console.log('TODO: implement delete share');
  }

}
