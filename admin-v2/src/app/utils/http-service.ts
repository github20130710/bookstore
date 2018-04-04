import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });
    return next.handle(clonedRequest).map(event => {
      if (event instanceof HttpResponse) {
        if (event.status === 401) {
          // JWT expired, go to login
        }
      }
      return event;
    })
  }
}
