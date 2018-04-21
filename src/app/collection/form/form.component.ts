import { Subject } from 'rxjs/Subject';
import { CollectionStore } from './../../stores/collection.store';
import { Component, OnInit, Output } from '@angular/core';

import { Collection } from '../../models/collection';

@Component({
  selector: 'collection-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output()
  readonly collectionCreated: Subject<Collection> = new Subject<Collection>();

  collection = new Collection();

  constructor(
    private collectionStore: CollectionStore
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.collectionStore.save(this.collection);
    this.collectionCreated.next(this.collection);
    this.collection = new Collection();
  }
}
