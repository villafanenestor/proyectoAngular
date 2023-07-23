import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'list-empleado-component',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent {

  @Input()
  public empleados: Empleado[] = [];

  @Output()
  onDeleteEmpleado: EventEmitter<string> = new EventEmitter();

  deleteEmpleado(id: string){
    this.onDeleteEmpleado.emit(id)
  }

}
