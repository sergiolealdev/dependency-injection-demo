import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DistanceConverterService} from './services/distance-converter-service.service';
import { ConversorComponent } from './components/conversor/conversor.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DistanceConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
