import { Component } from '@angular/core';
import {TemperatureMonitor} from './temperature-monitor.service'
 
@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent {
  title:string = 'Median Temperature Calculator'; 
  temps:Array<number>; 
  median_val : number;
  array_length:number;
  percentage_calc:number;
  
  formSubmited(event){
    if(this.temps.length < 8){
    this.temps = this._tm.recordTemperature(event.temp);
    this.array_length = this.temps.length;
    this.percentage_calc=this.temps.length*(100/8);
    }
  }
  
  getMedian(){
    this.median_val = this._tm.getCurrentMedian(this.temps)
  }
  
  onReset(){
  this.temps = this._tm.resetTemps();
  this.array_length = 0;
  this.percentage_calc=0;
  this.median_val=null;
  }
  
 constructor(private _tm:TemperatureMonitor){
  this.temps =[];
  this.array_length = 0;
  this.percentage_calc=0;
  this.median_val=null;
 }
}

