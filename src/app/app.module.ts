import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FourDigitDecimaNumberDirectiveDirective } from './directives/four-digit-decima-number-directive.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HomeComponent, FourDigitDecimaNumberDirectiveDirective ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
