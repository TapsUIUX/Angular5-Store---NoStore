import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitor {

temps_in_service:Array<number> =[];
temps_length:number=0

constructor() { }

 

recordTemperature(value){
  this.temps_in_service.push( Number(value) );
  return this.temps_in_service;
}

getCurrentMedian(val){
  
  this.temps_length = val.length ;
  
   val.sort((a,b)=>(a-b))
  
  if(this.temps_length > 0 && this.temps_length%2==0){
    
    return ( val[this.temps_length/2]+ val[(this.temps_length/2)-1])/2 ;
  }
  else if (this.temps_length>0 && this.temps_length%2 != 0)
  {
        return  val[Math.floor(this.temps_length/2)]  ;
  }
  
}

resetTemps(){
  this.temps_in_service = [];
  return this.temps_in_service;
}


}