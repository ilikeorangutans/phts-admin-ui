import { Observable } from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PathService } from './path.service';

import { Collection } from '../models/collection';
import { RenditionConfiguration } from '../models/rendition-configuration';

@Injectable()
export class RenditionConfigurationService {

  constructor(
    private http: HttpClient,
    private pathService: PathService
  ) { }

  forCollection(collection: Collection): Observable<RenditionConfiguration[]> {
    const p = this.pathService.renditionConfigurations(collection);
    return this.http
      .get<PaginatedRenditionConfigurations>(p)
      .map((response) => {
        return response.data;
      })
      .first();
  }

  save(collection: Collection, config: RenditionConfiguration): Promise<RenditionConfiguration> {
    const p = this.pathService.renditionConfigurations(collection);
    return this.http
      .post<RenditionConfiguration>(p, config)
      .toPromise();
  }
}

interface PaginatedRenditionConfigurations {
  data: RenditionConfiguration[];
}
