import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PathService } from './path.service';
import { Collection } from '../models/collection';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';

@Injectable()
export class CollectionService {

  private currentCollection: BehaviorSubject<Collection> = new BehaviorSubject<Collection>(null);

  current: Observable<Collection> = this.currentCollection
    .filter(c => c !== null)
    .distinctUntilChanged();

  constructor(
    private http: HttpClient,
    private pathService: PathService
  ) { }

  setCurrent(collection: Collection) {
    if (this.currentCollection.getValue() === collection) {
      return;
    }
    this.currentCollection.next(collection);
  }

  bySlug(slug: string): Observable<Collection> {
    const url = this.pathService.collection(slug);
    return this.http
      .get<Collection>(url)
      .map(c => {
        c.createdAt = new Date(c.createdAt);
        c.updatedAt = new Date(c.updatedAt);

        return c;
      })
      .first();
  }

  recent(): Observable<Array<Collection>> {
    const url = this.pathService.collections();

    return this.http
      .get<Array<Collection>>(url)
      .map((collections) => {
        collections = collections.map((c) => {
          c.createdAt = new Date(c.createdAt);
          c.updatedAt = new Date(c.updatedAt);
          return c;
        });

        return collections;
      });
  }

  save(collection: Collection): Observable<Collection> {
    const url = this.pathService.collections();

    return this.http.post<Collection>(url, collection);
  }

  delete(collection: Collection) {
    const url = this.pathService.collection(collection.slug);
    console.log(url);
    this.http.delete(url).subscribe(response => {
      console.log('response is ', response);
    });
  }
}
