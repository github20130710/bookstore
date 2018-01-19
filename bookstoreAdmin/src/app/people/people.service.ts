import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Role } from './people-modal';


/**
 * resource 服务
 */
@Injectable()
export class PeopleService {

  constructor(private http: Http) {}

  getLabels() {
    return this.http.get('/assets/showcase/data/roles.json')
      .toPromise()
      .then(res => <Role[]> res.json().data)
      .then(data => { return data; });
  }
}
