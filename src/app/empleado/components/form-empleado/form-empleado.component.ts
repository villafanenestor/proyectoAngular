import { Component, EventEmitter, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'form-empleado-component',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent {


  @Output()
  public onNewEmpleado: EventEmitter<Empleado> = new EventEmitter();

  public empleado: Empleado;
  constructor(){
    this.empleado = this.resetEmpleado();
  }



  public errorForm: boolean = false;


  addEmpleado ():void{
    let existeEmpleado = false;
    this.errorForm=false;
    if(this.empleado.nombre=="" || this.empleado.email==""){
      this.errorForm=true;
      return;
    }
    if(!this.errorForm){
      this.onNewEmpleado.emit({...this.empleado});
      this.empleado = this.resetEmpleado();
      this.errorForm = false
    }

  }


  public resetEmpleado():Empleado{
    const empl: Empleado = {
      nombre: '',
      email: '',
    };
    return empl;
  }

}
