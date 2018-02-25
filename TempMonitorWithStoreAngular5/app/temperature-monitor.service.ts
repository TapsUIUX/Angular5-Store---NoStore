import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import 'rxjs/add/operator/distinctUntilChanged';
import {StoreProvider} from './store';


const state:Array<number> = [];
 
@Injectable()
export class TemperatureMonitor {

temps_in_service:Array<number> =[];
temps_length:number=0
val:Array<number>;

constructor(private _store :StoreProvider) { }

 
recordTemperature(value){
    // Set value in the store
         this._store.subject.next([
            ...this._store.current_value,Number(value)
        ]);

   
 
}

getCurrentMedian(){
   
  this.temps_length = this._store.current_value.length ;
  this.val = this._store.current_value;
  
   this.val.sort((a,b)=>(a-b))
  
  if(this.temps_length > 0 && this.temps_length%2==0){
    console.log(this.val)
    console.log(this.val[this.temps_length/2] ,  this.val[(this.temps_length/2)-1] )
    return ( this.val[this.temps_length/2]+ this.val[(this.temps_length/2)-1])/2 ;
  }
  else if (this.temps_length>0 && this.temps_length%2 != 0)
  {
        return  this.val[Math.floor(this.temps_length/2)]  ;
  }
  
}
 
resetTemps(){
    this._store.subject.next([]);
}

}


 