import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import {routing} from "./app.routing";
import { OrderListComponent } from './order-list/order-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import {RouterModule} from "@angular/router";

let imports = [
  routing,
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    OrderListComponent,
    AddOrderComponent
  ],
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
