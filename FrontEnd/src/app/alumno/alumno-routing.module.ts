import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../core/guards/admin/admin.guard';
import { EditarAlumnoComponent } from './components/editar-alumno/editar-alumno.component';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { GridAlumnoComponent } from './components/grid-alumno/grid-alumno.component';

const routes: Routes = [
  { path: '', children: [
    { path: 'cargar', component: FormAlumnoComponent, canActivate: [AdminGuard]},
    { path: 'tabla', component: GridAlumnoComponent, children: [
      { path: 'editar', component: EditarAlumnoComponent, canActivate: [AdminGuard] },
      { path: 'eliminar', component: EditarAlumnoComponent , canActivate: [AdminGuard] } //cambiar por el componente eliminar
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
