import { PathService } from './path.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpInterceptor, HttpHandler } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { SessionService } from './session.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(
    private sessionService: SessionService,
    private pathservice: PathService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === this.pathservice.authenticate()) {
      return next.handle(req);
    }

    const authReq = req.clone({headers: req.headers.append('X-JWT', this.sessionService.getJWT())});

    return next.handle(authReq);
  }
}
