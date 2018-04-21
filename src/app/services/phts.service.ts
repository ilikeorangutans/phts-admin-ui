import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PhtsVersion } from './../models/phts-version';
import { PathService } from './path.service';

@Injectable()
export class PhtsService {

  private readonly _version: Subject<PhtsVersion> = new BehaviorSubject<PhtsVersion>(null);

  readonly version: Observable<PhtsVersion> = this._version.asObservable().filter(v => v !== null);

  constructor(
    private pathService: PathService,
    private http: HttpClient
  ) { }

  refreshVersion(): void {
    const url = this.pathService.version();
    this.http.get<PhtsVersion>(url)
      .subscribe(version => this._version.next(version));
  }

}
