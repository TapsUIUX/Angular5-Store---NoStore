import { Component,Input,Output,EventEmitter} from '@angular/core';
 

@Component({
  selector: 'app-median',
  template :`
  <div class='container'>
      <section>
      <button class='btn btn-success btn-md'   (click)='getMedianClicked()'>Get Median Temperature</button>
       <br><br>
       <div class=' well'>
       Current Median: <span > {{median_val}}</span> 
       </div>
    </section>
  </div>
  ` 
})
export class MedianComponent {
  
  @Input()median_val;
  @Output()getMedian_e = new EventEmitter();
  
 getMedianClicked(){
   this.getMedian_e.emit(true);
 }
  
  
 constructor() { }
   
 
   
}
