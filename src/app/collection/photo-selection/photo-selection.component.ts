import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Photo } from './../../models/photo';
import { SelectedPhoto } from '../selectable-photo-container/selectable-photo-container.component';

@Component({
  selector: 'app-photo-selection',
  template: '',
  styleUrls: ['./photo-selection.component.css']
})
export class PhotoSelectionComponent implements OnInit {

  @Output() selectedPhotos: EventEmitter<Array<Photo>> = new EventEmitter<Array<Photo>>();

  selected: Array<Photo> = [];

  constructor() { }

  readonly enabledWhenSelected = {
    'disabled': true
  };

  ngOnInit() {
  }

  isEmpty(): boolean {
    return this.selected.length === 0;
  }

  isNotEmpty(): boolean {
    return !this.isEmpty();
  }

  onPhotoSelect(selected: Photo) {
    this.toggleSelectPhoto(selected);
  }

  toggleSelectPhoto(photo: Photo) {
    if (this.selected.includes(photo)) {
      this.selected = this.selected.filter(p => p.id !== photo.id);
    } else {
      this.selected.push(photo);
    }
    this.selectedPhotos.emit(this.selected);

    this.enabledWhenSelected['disabled'] = this.selected.length === 0;
  }

  deselect() {
    this.selected = [];
    this.enabledWhenSelected['disabled'] = this.selected.length === 0;
    this.selectedPhotos.emit(this.selected);
  }

  isSelected(photo: Photo): boolean {
    return this.selected.includes(photo);
  }
}
