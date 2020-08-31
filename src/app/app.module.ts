import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TyreSizeComponent } from './tyre-size/tyre-size.component';
import { FormsModule } from '@angular/forms';
import { GearRatiosComponent } from './gear-ratios/gear-ratios.component';
import { SpeedTableComponent } from './speed-table/speed-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TyreSizeComponent,
    GearRatiosComponent,
    SpeedTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
