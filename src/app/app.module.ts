import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper/stepper.component';
import { StepperDetailsComponent } from './stepper-details/stepper-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepperDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
