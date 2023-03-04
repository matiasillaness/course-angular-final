import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { AlumnoRoutingModule } from './alumno-routing.module';



@NgModule({
  declarations: [
    EditarAlumnoComponent,
    
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }

