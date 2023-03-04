import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacionInicioComponent } from './components/autenticacion-inicio/autenticacion-inicio.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { NombreCompletoPipe } from '../pipes/nombre-completo.pipe';




@NgModule({
  declarations: [
    AutenticacionInicioComponent,
    LoginComponent,  
    
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    
  
  ]
})
export class AutenticacionModule { }
