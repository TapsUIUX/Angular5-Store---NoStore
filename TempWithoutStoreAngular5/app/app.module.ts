import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
 
import { AppComponent } from './app.component';

//created new input form to enter temprature
import { AppFormComponent } from './form.component';
import { MedianComponent} from './median.component';
import {TemperatureMonitor} from './temperature-monitor.service';
import {ProgressComponent  } from './progress.component';


@NgModule({ 
  declarations: [
    AppComponent ,
    AppFormComponent,
    MedianComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TemperatureMonitor],
  bootstrap: [AppComponent]
})
export class AppModule { } 
