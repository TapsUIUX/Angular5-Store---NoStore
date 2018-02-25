import { Component,Input,Output,EventEmitter} from '@angular/core';
import {TemperatureMonitor} from './temperature-monitor.service';
 

@Component({
  selector: 'app-median',
  template :`
  <div class='container'>
      <section>
        <button class='btn btn-success btn-md' (click)='getMedianClicked()'>Get Median Temperature</button>
          <br><br>
        <div class=' well'>
            Current Median: 
            <span *ngIf='!median_val_reset' > {{median_val}}</span> 
            <span *ngIf='median_val_reset'> no value !</span> 
        </div>
      </section>
  </div>
  ` 
})
export class MedianComponent {
  
  @Input() median_val_reset:boolean ;
  
  median_val:number= null;
  
 getMedianClicked(){
   this.median_val=this._tm.getCurrentMedian();
    if(this.median_val){this.median_val_reset= false}
    else{this.median_val_reset= true}
 }
  
 constructor(private _tm:TemperatureMonitor ) { }
   
}
