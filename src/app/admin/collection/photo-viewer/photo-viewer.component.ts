import { Rendition } from './../../models/rendition';
import { PathService } from './../../services/path.service';
import { Observable } from 'rxjs/Observable';
import { Collection } from './../../models/collection';
import { Photo } from './../../models/photo';
import { Component, OnInit, Input } from '@angular/core';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewerComponent implements OnInit {

  private readonly _width = Observable.fromEvent(window, 'resize').map(_ => window.innerWidth);

  private _photo: Photo;
  @Input()
  set photo(photo: Photo) {
    this.rendition = null;
    this._photo = photo;
    this.pickRenditionForSize();
  }

  private _collection: Collection;
  @Input()
  set collection(collection: Collection) {
    this.rendition = null;
    this._collection = collection;
    this.pickRenditionForSize();
  }

  rendition: Rendition;

  constructor(
    private readonly pathService: PathService
  ) { }

  ngOnInit() {
    this._width.subscribe(width => {
      this.pickRenditionForSize();
    });

    this.pickRenditionForSize();
  }

  renditionURI(): String {
    return this.pathService.rendition(this._collection, this.rendition);
  }

  pickRenditionForSize(): void {
    if (this._photo === undefined || this._collection === undefined) {
      return;
    }
    const width = window.innerWidth;

    const bestFit = this._collection.renditionConfigurations
      .find(config => config.name === 'admin preview');


    this.rendition = this._photo.renditions.find(rendition => rendition.renditionConfigurationID === bestFit.id);
    console.log('Picked rendition', this.rendition);
  }
}
