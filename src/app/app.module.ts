import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MachineListComponent } from './machine-list/machine-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MachineListComponent,
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
