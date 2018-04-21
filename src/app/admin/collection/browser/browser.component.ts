import { Observable } from 'rxjs/Observable';
import { CollectionStore } from './../../stores/collection.store';
import { Collection } from './../../models/collection';
import { Component, Input, OnInit } from '@angular/core';

import { CollectionService } from './../../services/collection.service';

@Component({
  selector: 'collection-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  @Input()
  numEntries = 20;

  @Input()
  collections: Observable<Array<Collection>>;

  constructor() { }

  ngOnInit() {
  }

}
