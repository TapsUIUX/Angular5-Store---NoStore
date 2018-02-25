import { Component,Input,OnInit,} from '@angular/core';
 

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
  
 
 
@Input()median_array_length; 
@Input()percentage_calc;
  
 constructor() { 
   
 }
   
 
   
}
