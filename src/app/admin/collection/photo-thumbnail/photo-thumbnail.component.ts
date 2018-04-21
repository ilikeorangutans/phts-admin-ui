import { RenditionConfiguration } from './../../models/rendition-configuration';
import { Rendition } from './../../models/rendition';
import { PathService } from './../../services/path.service';
import { Collection } from './../../models/collection';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Photo } from './../../models/photo';

@Component({
  selector: 'photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styleUrls: ['./photo-thumbnail.component.css']
})
export class PhotoThumbnailComponent implements OnInit {

  @Input() photo: Photo;

  @Input() collection: Collection;

  @Input() renditionConfiguration: RenditionConfiguration;

  @Input() class: string;

  @Output() clicked: EventEmitter<Photo> = new EventEmitter<Photo>();

  constructor(
    private pathService: PathService
  ) { }

  ngOnInit() {
  }

  rendition(): Rendition {
    return this.photo.renditions.find(rendition => rendition.renditionConfigurationID === this.renditionConfiguration.id);
  }

  thumbnailURL(): string {
    return this.pathService.rendition(this.collection, this.rendition());
  }

  onClick(): void {
    this.clicked.emit(this.photo);
  }

  hasRendition(): boolean {
    return this.photo.renditions.length > 0 && this.rendition() !== undefined;
  }
}
