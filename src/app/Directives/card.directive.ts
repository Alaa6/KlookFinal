import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.width = '100px';
  }

  private shadow(horizontalOffset :number , verticalOffset :number) {
    this.el.nativeElement.style.boxShadow = ` 0 ${horizontalOffset}px ${verticalOffset}px 5px 0 rgba(0, 0, 0, 0.1)`;
 
  }
//@HostListener() function decorator allows you to handle events 
  @HostListener('mouseenter') onMouseEnter(){
    this.shadow(5 , 5)

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.shadow(1 ,6)
  }

}


