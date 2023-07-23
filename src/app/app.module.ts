import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule} from '@angular/material/chips';
import '@angular/material'
import { EmpleadoModule } from './empleado/empleado.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatChipsModule,
    EmpleadoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
