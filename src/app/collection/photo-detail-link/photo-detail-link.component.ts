import { Album } from './../../models/album';
import { PathService } from './../../services/path.service';
import { Photo } from './../../models/photo';
import { Collection } from './../../models/collection';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-detail-link',
  templateUrl: './photo-detail-link.component.html',
  styleUrls: ['./photo-detail-link.component.css']
})
export class PhotoDetailLinkComponent implements OnInit {

  @Input() photo: Photo;

  @Input() collection: Collection;

  @Input() album: Album;

  constructor(
    private pathService: PathService
  ) { }

  ngOnInit() {
  }

  detailURL(): string {

    if (this.album !== undefined) {
      return '';
    }

    return ['/admin/collection', this.collection.slug, 'photos', this.photo.id].join('/');
  }

}
