import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { AlumnoRoutingModule } from './alumno-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecursosAlumnoService } from './service/recursos-alumno.service';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { GridAlumnoComponent } from './components/grid-alumno/grid-alumno.component';
import { SharedModule } from '../shared/shared.module';
import { NombreCompletoPipe } from '../pipes/nombre-completo.pipe';






@NgModule({

  providers: [
    RecursosAlumnoService,

  ],
  declarations: [
    EditarAlumnoComponent,
    FormAlumnoComponent,
    GridAlumnoComponent,
    NombreCompletoPipe
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    SharedModule,

  
  ]
})
export class AlumnoModule { }

