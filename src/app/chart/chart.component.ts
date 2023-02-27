import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Chart } from '../models/Chart';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  charts$!: Observable<Chart[]>;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.charts$ = this.chartService.getDataCharts()
  }

  
 
}
