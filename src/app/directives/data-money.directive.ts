import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
import { ChartService } from '../services/chart.service';

@Directive({
  selector: '[appDataMoney]',
})
export class DataMoneyDirective implements OnInit {
  @Input() perce!: any;
  constructor(
    private chartService: ChartService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  ngOnInit(): void {
    
  }
  @HostListener('mouseenter')
  mouseenter() {
    console.log("OMG It's a Mouse!!!");
    this.chartService.getDataCharts().subscribe((data) => {
      console.log(data);
      const arr = [];
      for (let i = 0; i < data.length; i++) {
        arr.push(data[i].percent);
      }
      const max = Math.max(...arr);
      console.log(max);
      console.log(this.perce);
      if (max === this.perce) {
        console.log(max);
        this.renderer.setStyle(
          this.el.nativeElement,
          'background-color',
          'hsl(186, 34%, 60%)'
        );
      }
    });
  }
  @HostListener('mouseleave')
  mouseleave() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'hsl(10, 79%, 65%)'
    );
  }
}
