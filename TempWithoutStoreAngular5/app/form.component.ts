import { Component ,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  template : `
     <div class='container'>
     <form [formGroup]='form' class='from-group' (ngSubmit)='onSubmit()'>
      <div class='form-group'>
      <label for="temperature">Add Temperature:</label>
      <input class='form-control' id="temperature" formControlName='temp'>
      </div>
      <p *ngIf='required_Err' class='text-warning'>Opps ! Seems you forget to enter value </p>
      <p *ngIf='pattern_Err' class='text-warning'> This field accepts numbers only </p>
      <button class='btn btn-primary btn-md' [disabled]='form.invalid'>add</button>
      <button type='reset' class='btn btn-warning btn-md' (click)='onReset()' >reset</button>
     </form>
     </div> 
  ` 
})
export class AppFormComponent {
  
  @Output() form_e = new EventEmitter();
  @Output() reset_e = new EventEmitter();
  
  
 constructor( private _fb: FormBuilder) { }
  
    form = this._fb.group({
        temp : ['',[Validators.required,Validators.pattern(/^-?[0-9]+$/)]]
        })
        
        get required_Err(){
          let form_Ctl = this.form.get('temp');
          return form_Ctl.hasError('required') && form_Ctl.touched;
        }
        
         get pattern_Err(){
          let form_Ctl = this.form.get('temp');
          return !form_Ctl.hasError('required') && form_Ctl.hasError('pattern');
        }
        
        onSubmit(){
          this.form_e.emit(this.form.value)
          this.form.reset();
        }  
        
        onReset(){
          this.form.reset();
          this.reset_e.emit(true)
        }
   
}
