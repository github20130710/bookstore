import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../utils/httpUtils.service'
import { Label } from './resource-model';


/**
 * resource 服务
 */
@Injectable()
export class ResourceService {

  url = 'http://localhost:3000';

  constructor(private httpInterceptorService: HttpInterceptorService) {
  }

  getLabels(params): Label[]{
    if(!params) params = {};
    console.log(this.httpInterceptorService.get('http://localhost:3000/books', params));
    return this.httpInterceptorService.get('http://localhost:3000/books', params);
  }
}
