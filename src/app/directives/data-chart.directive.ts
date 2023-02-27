import { Directive, ElementRef, HostListener, Input,OnChanges,OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[percent]'
})
export class DataChartDirective implements OnInit, OnChanges{
  @Input() percentage!: number ; 
  @Input() day!: string ; 
  @Input() idValue!: number;


  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    // console.log((this.percentage * 200) + 'px')
    // let minHeight = (this.percentage * 200) + 'px'
    // this.el.nativeElement.style.minHeight = minHeight
  }
  @HostListener('mouseEnter') onMouseEnter() {
    
  }
  ngOnChanges(changes: SimpleChanges): void {

    let minHeight = (this.percentage * 200) + 'px'
    this.el.nativeElement.style.height = minHeight
  }



}
