import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'; // <-- importa el módulo de rutas

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormAlumnoComponent } from './alumno/components/form-alumno/form-alumno.component';

import { GridAlumnoComponent } from './alumno/components/grid-alumno/grid-alumno.component';
import { FooterComponent } from './components/footer/footer.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { FontSizeDirective } from './directives/font-size.directive';
import { NoEncontradoComponent } from './core/components/no-encontrado/no-encontrado.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { AgregarCursoComponent } from './cursos/components/agregar-curso/agregar-curso.component';
import { EditarCursoComponent } from './cursos/components/editar-curso/editar-curso.component';
import { ListarCursoComponent } from './cursos/components/listar-curso/listar-curso.component';
import { AlumnoRoutingModule } from './alumno/alumno-routing.module';
import { HttpClientModule } from '@angular/common/http';



 




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    FooterComponent,
    NombreCompletoPipe,
    FontSizeDirective,
    NoEncontradoComponent,
    InicioComponent,
    AgregarCursoComponent,
    EditarCursoComponent,
    ListarCursoComponent,
    NombreCompletoPipe
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AlumnoRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NombreCompletoPipe
  ]
})
export class AppModule { }
