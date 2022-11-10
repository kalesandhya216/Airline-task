import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AirlinepassDashboardComponent } from './shared/components/airlinepass-dashboard/airlinepass-dashboard.component';
import { TotalCheckInComponent } from './shared/components/airlinepass-dashboard/total-check-in/total-check-in.component';
import { PassInfoCardComponent } from './shared/components/airlinepass-dashboard/pass-info-card/pass-info-card.component';
import { PassListComponent } from './shared/components/airlinepass-dashboard/pass-list/pass-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlinepassDashboardComponent,
    TotalCheckInComponent,
    PassInfoCardComponent,
    PassListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
