import { RenditionConfiguration } from './../../models/rendition-configuration';
import { Photo } from './../../models/photo';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

import { Album } from './../../models/album';
import { Collection } from './../../models/collection';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'album-cover-card',
  templateUrl: './album-cover-card.component.html',
  styleUrls: ['./album-cover-card.component.css']
})
export class AlbumCoverCardComponent implements OnInit {

  @Input() collection: Collection;

  @Input() album: Album;

  coverPhoto: Observable<Photo>;

  renditionConfig: RenditionConfiguration;

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.renditionConfig = this.collection.renditionConfigurations.find(c => c.name === 'admin thumbnails');
    if (this.album.coverPhotoID !== undefined && this.album.coverPhotoID !== null) {
      console.log('fetching cover photo', this.album);
      this.coverPhoto = this.photoService.byID(this.collection, this.album.coverPhotoID, [this.renditionConfig]);
    }
  }

}
