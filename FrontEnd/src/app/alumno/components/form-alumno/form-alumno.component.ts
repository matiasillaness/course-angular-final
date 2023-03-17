import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';
import { AlumnoServiceService } from 'src/app/alumno/service/alumno-service.service';
import { Router } from '@angular/router';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from 'src/app/core/services/sesion.service';
import { RecursosAlumnoService } from '../../service/recursos-alumno.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnDestroy{
  formEstudents: FormGroup;
  suscripcion: Subscription = new Subscription();
  
  
  constructor( 
    private alumnoService: AlumnoServiceService,
    private alumnoService2: RecursosAlumnoService,
    private router: Router,
    private sesion: SesionService,
    
    ){
    let controls: any = {
      nombre: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      apellido: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      dni: new FormControl('',[Validators.required, Validators.pattern('[0-9]{8}')]),
      fecha_nac: new FormControl('',[Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/](19|20)\d\d$/)] ),
      genero: new FormControl('',[Validators.required, Validators.pattern('^[Masculino|Femenino|Otro]*$')]),
      direccion: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      provincia: new FormControl('',[Validators.required, Validators.pattern('^[Cordoba|Buenos Aires|Rosario|Tucuman]*$')]),
      legajo: new FormControl('',[Validators.required, Validators.pattern('[0-9]{6}')]),
    }
    this.formEstudents = new FormGroup(controls);
    
  }
  ngOnDestroy(): void {
   this.suscripcion.unsubscribe()
  }

  ngOnInit(){
   
  }
  



  carreraSeleccionada: string = '';
  estudent!: Alumno;
  onCarreraSelected(event: any) {
    this.carreraSeleccionada = event.target.value;
  }

  guardarStudent() {
    this.estudent = this.formEstudents.value;
    this.estudent.carrera = this.carreraSeleccionada; 
    this.alumnoService.agregarAlumno(this.estudent);
    this.suscripcion = this.alumnoService2.postAlumno(this.estudent).subscribe(
      (response) => {
        console.log('Alumno editado exitosamente:', response);
        alert("ALUMNO EDITADO CORRECTAMENTE");
        this.router.navigate(['alumno/tabla']);
      },
      (error) => {
        console.error('Error al cargar Alumno:', error);
      }
    );
    console.log(this.estudent)
  }

  


  
}
