import { Injectable,EventEmitter } from '@angular/core';

/**
 * demo服务
 */
@Injectable()
export class DemoService {

  //标题
  titleEventEmitter:EventEmitter<string>;

  constructor() {
    this.titleEventEmitter = new EventEmitter();
  }
}
