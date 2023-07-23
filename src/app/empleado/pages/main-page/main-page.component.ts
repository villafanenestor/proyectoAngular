import { Empleado } from './../../interfaces/empleado.interface';
import { Component } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'empleado-main-component',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(
  private empleadoService: EmpleadoService
  ){

  }
  get empleados(): Empleado[]{
    return [...this.empleadoService.empleados];
  }

  deleteEmpleadoById(id: string): void{
    this.empleadoService.deleteEmpleadoById(id);
  }


  addEmpleado(empleado: Empleado){
    this.empleadoService.addEmpleado(empleado);
  }


}
