import { Component} from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-button',
  template: `
  <pre class="card card-block card-header">{{singleModel}}</pre>
  <button type="button" class="btn btn-primary"
        [(ngModel)]="singleModel" btnCheckbox
        btnCheckboxTrue="1" btnCheckboxFalse="0">
    Single Toggle
  </button>

  <pre class="card card-block card-header">{{radioModel || 'null'}}</pre>
  <div class="btn-group">
    <label class="btn btn-primary" [(ngModel)]="radioModel" btnRadio="Left">Left</label>
    <label class="btn btn-primary" [(ngModel)]="radioModel" btnRadio="Middle">Middle</label>
    <label class="btn btn-primary" [(ngModel)]="radioModel" btnRadio="Right">Right</label>
  </div>
  `
})
export class ButtonComponent {

  singleModel: string = '1';
  radioModel: string = 'Middle';

  constructor(private demoService: DemoService){
    this.demoService.titleEventEmitter.emit("按钮");
  }
}
