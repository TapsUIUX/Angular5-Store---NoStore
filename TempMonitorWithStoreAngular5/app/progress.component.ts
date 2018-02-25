import { Component,Input,OnInit,} from '@angular/core';
import {TemperatureMonitor} from './temperature-monitor.service';
import {StoreProvider} from './store';
 

@Component({
  selector: 'app-progress',
  template :`
  <div class='container'>
      <div class="progress">
         <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
           aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" [style.width]='percentage_calc+"%"'>
           {{median_array_length}} out of 8
         </div>
      </div>
    <p *ngIf='(median_array_length == 8)'> Maximum number of input reached  </p>
  </div>
  ` 
})
export class ProgressComponent {
  
temps:array<number>;
percentage_calc:number;
median_array_length:number;
 
 constructor( private _store : StoreProvider) { }
 
 ngOnInit(){
    
   this._store.subject.subscribe(temps=>{ this.temps=temps;
   this.percentage_calc = this.temps.length * (100/8);
   this.median_array_length = this.temps.length ;
     
   });
  
   console.log("legth progress",this.temp ,this.percentage_calc)
 }
}
