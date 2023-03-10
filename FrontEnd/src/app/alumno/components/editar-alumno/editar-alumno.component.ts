import {  Component,  ElementRef,  EventEmitter,  Input, OnDestroy, OnInit,  Output,  Renderer2,  ViewChild,  ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoServiceService } from '../../service/alumno-service.service';
import { RecursosAlumnoService } from '../../service/recursos-alumno.service';
import { GridAlumnoComponent } from '../grid-alumno/grid-alumno.component';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit, OnDestroy {
 
  @Input() alumnoId!: Alumno
  suscripcion: Subscription = new Subscription();
  mostrarForm !: boolean;
 
 ///////////////////////////////////////////////
  @Output() editar = new EventEmitter(); 
  editarAlumno() {
    this.editar.emit(); // Emitir el evento al hacer clic
  }
 ///////////////////////////////////////////////

  formEstudents: FormGroup;
  
  
  
  constructor( 
    private alumnoService: RecursosAlumnoService, private router: Router, private route: ActivatedRoute,
    
    ){
    let controls: any = {
      nombre: new FormControl( '' ,[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      apellido: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      dni: new FormControl('',[Validators.required, Validators.pattern('[0-9]{8}')]),
      fecha_nac: new FormControl('',[Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/](19|20)\d\d$/)] ),
      genero: new FormControl('',[Validators.required, Validators.pattern('^[Masculino|Femenino|Otro]*$')]),
      direccion: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      provincia: new FormControl('',[Validators.required, Validators.pattern('^[Cordoba|Buenos Aires|Rosario|Tucuman]*$')]),
      legajo: new FormControl('',[Validators.required, Validators.pattern('[0-9]{6}')]),
      carrera: new FormControl(),
      id: new FormControl()
      
     
    }
    this.formEstudents = new FormGroup(controls);
  
   
   
  } 
  ngOnDestroy(): void { 
    this.suscripcion.unsubscribe();
  }

  ngOnInit() {
    this.suscripcion = this.alumnoService.getAlumnosUni(this.alumnoId).subscribe(
      (alumno) => {
        this.alumnoId = alumno;
        this.formEstudents.setValue({
          nombre: alumno.nombre || '',
          apellido: alumno.apellido || '',
          dni: alumno.dni || '',
          fecha_nac: alumno.fecha_nac || '',
          genero: alumno.genero || '',
          direccion: alumno.direccion || '',
          provincia: alumno.provincia || '',
          legajo: alumno.legajo || '',
          carrera: alumno.carrera || '',
          id: alumno.id || ''
        })
      },
      (error) => {
        console.log(error);
      }
    );

    this.route.params.subscribe(params  => {
      // Aquí puedes resetear la variable cada vez que cambien los datos
      this.mostrarForm = false;
    });
  }
  



  carreraSeleccionada: string = '';
  
  onCarreraSelected(event: any) {
    this.carreraSeleccionada = event.target.value;
  }

  editarStudent() {
    this.alumnoId = this.formEstudents.value;
    this.alumnoId.carrera = this.carreraSeleccionada;
    
    this.suscripcion = this.alumnoService.editarAlumno(this.alumnoId).subscribe(
      (response) => {
        console.log('Alumno editado exitosamente:', response);
        alert("ALUMNO EDITADO CORRECTAMENTE");
        this.router.navigate(['alumno/tabla']);
        this.editarAlumno()
        
      },
      (error) => {
        console.error('Error al editar alumno:', error);
      }
    );
    console.log(this.alumnoId)
  }

  
}
