import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { OrdersJzComponent } from './components/orders-jz/orders-jz.component';
import { OrdersItemJzComponent } from './components/orders-item-jz/orders-item-jz.component';
import { OrdersDetailsJzComponent } from './components/orders-details-jz/orders-details-jz.component';
import {HttpClientModule} from '@angular/common/http';
import {JzDataService} from './services/jz-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    OrdersJzComponent,
    OrdersItemJzComponent,
    OrdersDetailsJzComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [JzDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
