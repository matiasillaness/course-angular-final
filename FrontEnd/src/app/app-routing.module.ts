import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { SesionGuard } from './core/guards/sesion/sesion.guard';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},

  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then((m) => m.AlumnoModule),
    canLoad: [SesionGuard]
    
  },
  
  {
    path: 'auth',
    loadChildren: () => import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: NoEncontradoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }