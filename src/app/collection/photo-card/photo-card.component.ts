import { RenditionConfiguration } from './../../models/rendition-configuration';
import { Photo } from './../../models/photo';
import { Collection } from './../../models/collection';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent implements OnInit {

  @Input()
  collection: Collection;

  @Input()
  photo: Photo;

  @Input()
  rendition: RenditionConfiguration;

  @Output()
  photoClicked: Subject<Photo> = new Subject<Photo>();

  constructor() { }

  ngOnInit() {
  }

  onPhotoClicked(photo: Photo): void {
    this.photoClicked.next(photo);
  }
}
