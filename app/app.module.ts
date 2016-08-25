import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {MyDemoComponent} from './my-demo.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  AppComponent, 
  MyDemoComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

