import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class EmpleadoService {
  constructor() { }
  public empleados: Empleado[] = [];

  public addEmpleado (empleado: Empleado):void{
    console.log('onNewEmpleado',empleado);
    let existeEmpleado = false;
    this.empleados.map(e =>{
      if(e.nombre== empleado.nombre && e.email==empleado.email){
        existeEmpleado= true;
      }
    })
    if(!existeEmpleado){
      const newEmpleado: Empleado = {id: uuid(), ...empleado};
      this.empleados.push(newEmpleado);
    }
    console.log('empleados desde services', this.empleados)
  }


  public deleteEmpleadoById (id: string){
    console.log('id para eliminar', id);
    // console.log(this.empleados.splice(index))
    this.empleados = this.empleados.filter( empleado => empleado.id !== id);
  }

}
