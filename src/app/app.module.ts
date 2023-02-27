import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceComponent } from './balance/balance.component';
import { ChartComponent } from './chart/chart.component';
import { DataChartDirective } from './directives/data-chart.directive';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { DataMoneyDirective } from './directives/data-money.directive';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    ChartComponent,
    DataChartDirective,
    ChartCardComponent,
    DataMoneyDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
