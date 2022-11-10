import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AirlinePassDashboardComponent } from './shared/component/airline-pass-dashboard/airline-pass-dashboard.component';
import { TotalCheckedInComponent } from './shared/component/airline-pass-dashboard/total-checked-in/total-checked-in.component';
import { PassObjCardComponent } from './shared/component/airline-pass-dashboard/pass-obj-card/pass-obj-card.component';
import { PassListComponent } from './shared/component/airline-pass-dashboard/pass-list/pass-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlinePassDashboardComponent,
    TotalCheckedInComponent,
    PassObjCardComponent,
    PassListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
