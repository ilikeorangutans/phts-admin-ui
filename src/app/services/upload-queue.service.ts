import { Album } from './../models/album';
import { Observable } from 'rxjs/Observable';
import { Photo } from './../models/photo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Collection } from '../models/collection';
import { Subject } from 'rxjs/Subject';
import { PhotoService } from './photo.service';

import 'rxjs/add/operator/concatMap';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class UploadQueueService {

  private serializedQueue = new Subject<QueuedItem>();

  queue: BehaviorSubject<Array<File>> = new BehaviorSubject([]);

  successfulUploads: Subject<Photo> = new Subject();

  constructor(
    private photoService: PhotoService
  ) {
    this.serializedQueue
      .asObservable()
      .concatMap((item) => {
        return Observable
          .fromPromise(this.photoService.upload(item.collection, item.file));
      })
      .subscribe(photo => {
        const updated = this.queue.value;
        updated.shift();
        this.queue.next(updated);
        this.successfulUploads.next(photo);
      });
  }

  enqueue(upload: UploadRequest) {
    this.serializedQueue.next(new QueuedItem(upload.collection, upload.file));
    const updated = this.queue.value;
    updated.push(upload.file);
    this.queue.next(updated);
  }
}

export class UploadRequest {
  constructor(
    readonly file: File,
    readonly collection: Collection,
    readonly album: Album = null
  ) {}
}

class QueuedItem {
  collection: Collection;
  file: File;

  constructor(c: Collection, f: File) {
    this.collection = c;
    this.file = f;
  }
}
