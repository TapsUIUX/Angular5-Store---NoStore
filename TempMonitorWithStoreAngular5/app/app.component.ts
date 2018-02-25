import { Component, OnInit } from '@angular/core';
import {TemperatureMonitor} from './temperature-monitor.service';
import {StoreProvider} from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  title:string = 'Median Temperature Calculator'; 
  temps:Array<number>=[]; 
  median_val_reset : boolean;
 
  
  formSubmited(event){
    this.temps = this._store.current_value ;
    if(this.temps.length < 8){
    this.temps = this._tm.recordTemperature(event.temp);
    }
  }
  
  
  onReset(event){
  this._tm.resetTemps();
  this.median_val_reset = event ;
  }
  
 constructor(private _tm:TemperatureMonitor , private _store:StoreProvider){
  this.temps =[];
  this.array_length = 0;
  this.percentage_calc=0;
  this.median_val=null;
 }
 
 ngOnInit(){
   this.temps=this._store.current_value;
 }
 
}

