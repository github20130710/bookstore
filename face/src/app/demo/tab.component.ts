import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-tab',
  template: `
<div>
  <tabset>
    <tab heading="Static title" id="tab1">Static content</tab>
    <tab heading="Static Title 1">Static content 1</tab>
    <tab heading="Static Title 2">Static content 2</tab>
    <tab (select)="alertMe()">
      <ng-template tabHeading>
        <span class="badge badge-secondary">Click here!</span>
      </ng-template>
      I've got an HTML heading, and a select callback. Pretty cool!
    </tab>
  </tabset>
</div>
  `
})
export class TabComponent {

  constructor(private demoService: DemoService){
    this.demoService.titleEventEmitter.emit("标签页");
  }

  alertMe(): void {
    setTimeout(function(): void {
      alert("You've selected the alert tab!");
    });
  }
}
