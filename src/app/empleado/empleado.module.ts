import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListEmpleadoComponent } from './components/list-empleado/list-empleado.component';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  declarations: [
    ListEmpleadoComponent,
    FormEmpleadoComponent,
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmpleadoModule { }
