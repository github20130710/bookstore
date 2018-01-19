import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Label } from './resource-model';


/**
 * resource 服务
 */
@Injectable()
export class ResourceService {

  url = 'http://localhost:3000';

  constructor(private http: Http) {
  }

  getLabels(): Label[]{
    return this.http.get('http://localhost:3000/books')
      .toPromise()
      .then(res => <Label[]> res.json().data)
      .then(data => { return data; });
  }
}
