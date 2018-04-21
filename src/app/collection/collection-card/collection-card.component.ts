import { Collection } from './../../models/collection';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {

  @Input()
  collection: Collection;

  constructor() { }

  ngOnInit() {
  }

}
