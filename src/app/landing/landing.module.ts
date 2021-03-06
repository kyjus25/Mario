import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
