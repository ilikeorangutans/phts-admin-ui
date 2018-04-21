import { Collection } from './../../models/collection';
import { Observable } from 'rxjs/Observable';
import { CollectionStore } from './../../stores/collection.store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recentCollections: Observable<Array<Collection>>;

  creationFormVisible = false;

  busy = false;

  buttonClasses = {};

  constructor(
    private collectionStore: CollectionStore
  ) { }

  ngOnInit() {
    this.recentCollections = this.collectionStore.recent;
    this.collectionStore.refreshRecent();

    this.collectionStore.currentlyBusy.subscribe(busy => {
      this.buttonClasses['disabled'] = busy;
      this.busy = busy;
    });
  }

  showCreationDialog(): void {
    this.creationFormVisible = true;
  }

  onCollectionCreated(): void {
    this.creationFormVisible = false;
  }

  refresh(): void {
    this.collectionStore.refreshRecent();
  }
}
