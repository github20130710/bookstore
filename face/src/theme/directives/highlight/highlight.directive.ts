import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[swHighlight]'
})

export class Highlight {
  constructor(private el: ElementRef) { }

  @Input('swHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
