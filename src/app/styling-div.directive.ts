import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[StylingDiv]'
})
export class StylingDivDirective {

  constructor() { }

  @HostBinding('style.color') bgcolor:any;

  @HostListener('click') ClickMethod(){
    this.bgcolor = "green";
  }
  @HostListener('mouseover') OnMouseOver(){
    this.bgcolor = "blue";
  }
  @HostListener('mouseout') OnMouseOut(){
    this.bgcolor = "red"
  }
}

