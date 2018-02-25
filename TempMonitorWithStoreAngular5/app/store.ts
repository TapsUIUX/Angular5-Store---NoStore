import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import { State } from './state.interface';
import { Observable } from 'rxjs/Observable';

const state:Array<any> =[]

export class StoreProvider {
    private subject = new BehaviorSubject<number[]>(state);
    private store = this.subject.asObservable();

    get  current_value(){
    return this.subject.value;
    }
  
}
