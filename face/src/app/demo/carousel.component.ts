import { Component} from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-carousel',
  template: `
  <carousel>
    <slide>
      <img src="assets/demo/nature_1.jpg" alt="First slide" style="display: block; width: 100%;">
      <div class="carousel-caption d-none d-md-block">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </slide>
    <slide>
      <img src="assets/demo/nature_2.jpg" alt="Second slide" style="display: block; width: 100%;">
    </slide>
    <slide>
      <img src="assets/demo/nature_3.jpg" alt="Third slide" style="display: block; width: 100%;">
    </slide>
  </carousel>
  `,
  providers: [
    { provide: CarouselConfig, useValue: { interval: 2000, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent {

  constructor(private demoService: DemoService){
    this.demoService.titleEventEmitter.emit("旋转木马");
  }
}
