import { RenditionConfiguration } from './../../models/rendition-configuration';
import { CollectionService } from './../../services/collection.service';
import { Component, OnInit } from '@angular/core';
import { RenditionConfigurationService } from '../../services/rendition-configuration.service';

import 'rxjs/add/operator/switchMap';
import { CollectionStore } from '../../stores/collection.store';
import { Collection } from '../../models/collection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-settings',
  templateUrl: './collection-settings.component.html',
  styleUrls: ['./collection-settings.component.css']
})
export class CollectionSettingsComponent implements OnInit {

  configurations: Array<RenditionConfiguration> = [];

  collection: Collection;

  constructor(
    private collectionStore: CollectionStore,
    private router: Router,
    private renditionConfigurationService: RenditionConfigurationService
  ) { }

  ngOnInit() {
    this.collectionStore.current.first().subscribe(c => this.collection = c);
    this.collectionStore.current
      .first()
      .switchMap(c => {
        return this.renditionConfigurationService.forCollection(c);
      })
      .subscribe(configs => this.configurations = configs);
  }

  delete(): void {
    if (!confirm(`Are you certain you want to delete collection ${this.collection.name} and its ${this.collection.photoCount} photos?`)) {
      return;
    }

    this.collectionStore.delete(this.collection);

    this.router.navigate(['admin', 'collection']);
  }

}
