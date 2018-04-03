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
    return this._httpInterceptorService.post(this.url+'/books/book', params);
  }

  editBook(condition, params):any {
    let body = {condition, params};
    return this._httpInterceptorService.put(this.url+'/books/book', body);
  }

  deleteBook(params):any {
    return this._httpInterceptorService.delete(this.url+'/books', params);
  }

  /********************************
   * 书籍分类
   */
}
