import { Collection } from './../../models/collection';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collection-nav-bar',
  templateUrl: './collection-nav-bar.component.html',
  styleUrls: ['./collection-nav-bar.component.css']
})
export class CollectionNavBarComponent implements OnInit {

  @Input()
  collection: Collection;

  constructor() { }

  ngOnInit() {
  }

}
