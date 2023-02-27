import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  percentageSubject = new Subject<number>()
  private charts = [
    { id: 1, percent: 0.25, day: 'mon' },
    { id: 2, percent: 0.55, day: 'tue' },
    { id: 3, percent: 0.45, day: 'wed' },
    { id: 4, percent: 0.25, day: 'thu' },
    { id: 5, percent: 0.1, day: 'fri' },
    { id: 6, percent: 0.9, day: 'sat' },
    { id: 7, percent: 0.8, day: 'sun' },
  ];

  constructor() { }

  getPercentage(percent: number) {
    console.log(percent)
    this.percentageSubject.next(percent);
  }

  getDataCharts() {
    return of(this.charts);
  }

  returnPercentage() {
    return this.percentageSubject.asObservable()
  }
}
