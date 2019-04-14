import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }

  flag = false;


  @HostBinding('class.highlited')
  get cssClass() {
    return this.flag;
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.flag = true;
  }

 @HostListener('mouseleave')
  mouseLeave() {
    this.flag = false;
  } 

}
