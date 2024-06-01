import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatButtonModule } from '@angular/material/button';
//import {MatIconModule } from '@angular/material/icon';  
import { LOCALE_ID } from '@angular/core';
import { DATE_PIPE_DEFAULT_OPTIONS, NgOptimizedImage, registerLocaleData } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemosComponent } from './previo/previo.component';
import { MyCoreModule } from 'src/lib/my-core/my-core.module';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    DemosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyCoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
