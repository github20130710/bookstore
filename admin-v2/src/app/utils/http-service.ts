import { Injectable }    from '@angular/core';
import { Http, Response }   from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpInterceptorService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  /**
   * 统一发送请求
   * @param params
   * @returns {Promise<{success: boolean, msg: string}>|Promise<R>}
   */
  public request(params: any): any {
    // POST请求（参数、返回值类型都是任意类型）
    if (params['method'] == 'post' || params['method'] == 'POST') {
      return this.post(params['url'], params['data']);
    } else if (params['method'] == 'put' || params['method'] == 'PUT') {
      return this.put(params['url'], params['data']);
    } else if (params['method'] == 'delete' || params['method'] == 'DELETE') {
      return this.delete(params['url'], params['data']);
    } else { // 其他请求
      return this.get(params['url'], params['data']);
    }
  }

  /**
   * get请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public get(url: string, params: any): any {
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.get(url, {params, headers});
  }

  /**
   * post请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public post(url: string, params: any) {
    return this.httpClient.post(url, params);
  }

  /**
   * put请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public put(url: string, params: any) {
    params = params || {};
    return this.httpClient.get(url, params);
  }

  /**
   * delete请求
   * @param url 接口地址
   * @param params 参数
   * @returns {Promise<R>|Promise<U>}
   */
  public delete(url: string, params: any) {
    return this.http.delete(url, params)
      .toPromise()
      .then(this.handleSuccess)
      .catch(res => this.handleError(res));
  }

  /**
   * 处理请求成功
   * @param res
   * @returns {{data: (string|null|((node:any)=>any)
 */
  private handleSuccess(res: Response) {
    let body = res["_body"];
    if (body) { // 有数据返回
      return {
        data: res.json().data || {}, // 返回内容
        code: res.json().code || {}, // 返回code
        message: res.json().message || {}, // 返回信息
        statusText: res.statusText,
        status: res.status,
        success: true
      }
    } else { // 无数据返回
      return {
        data: res.json().data || {}, // 返回内容
        code: res.json().code || {}, // 返回code
        message: res.json().message || {}, // 返回信息
        statusText: res.statusText,
        status: res.status,
        success: true
      }
    }
  }

  /**
   * 处理请求错误
   * @param error
   * @returns {void|Promise<string>|Promise<T>|any}
   */
  private handleError(error) {
    let msg = '请求失败';
    if (error.status == 400) {
      console.log('请求参数正确');
    }
    if (error.status == 404) {
      console.error('请检查路径是否正确');
    }
    if (error.status == 500) {
      console.error('请求的服务器错误');
    }
    return {success: false, msg: msg};
  }

}
