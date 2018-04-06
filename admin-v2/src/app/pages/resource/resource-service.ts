import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { RequestOptions } from '@angular/common/http';

/**
 * resource 服务
 */
@Injectable()
export class ResourceService {

  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {
  }

  /********************************
   * 书籍
   */
  queryBooks(): any{
    let params = {};
    if(arguments.length>0) params = arguments[0];
    return this.httpClient.get(this.url + '/books', params);
  }

  createBook(params):any {
    return this.httpClient.post(this.url+'/books/book', params);
  }

  editBook(condition, params):any {
    let body = {condition, params};
    return this.httpClient.put(this.url+'/books/book', body);
  }

  deleteBookById(params):any {
    //this.defaultOptions = new RequestOptions({body : params});
    //return this.httpClient.delete(this.url+'/books/book', this.defaultOptions);
  }

  /********************************
   * 书籍分类
   */
}
