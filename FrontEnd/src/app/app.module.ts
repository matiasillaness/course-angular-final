import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from './components/shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormAlumnoComponent } from './components/form-alumno/form-alumno.component';
import { LoginComponent } from './components/login/login.component';
import { GridAlumnoComponent } from './components/grid-alumno/grid-alumno.component';
import { FooterComponent } from './components/footer/footer.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { FontSizeDirective } from './directives/font-size.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    FormAlumnoComponent,
    LoginComponent,
    GridAlumnoComponent,
    FooterComponent,
    NombreCompletoPipe,
    FontSizeDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
