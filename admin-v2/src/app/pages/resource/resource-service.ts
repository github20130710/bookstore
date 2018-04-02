import { Injectable } from '@angular/core';
import { HttpInterceptorService } from '../../utils/http-service';

/**
 * resource 服务
 */
@Injectable()
export class ResourceService {

  url = 'http://localhost:3000';

  constructor(private _httpInterceptorService: HttpInterceptorService) {
  }

  /********************************
   * 书籍
   */
  queryBooks(params): any{
    if(!params) params = {};
    return this._httpInterceptorService.get(this.url + '/books', params);
  }

  createBook(params):any {

  }

  /********************************
   * 书籍分类
   */
}
