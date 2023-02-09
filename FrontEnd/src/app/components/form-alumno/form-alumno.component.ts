import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent {
  formEstudents: FormGroup;

  constructor(){
    let controls: any = {
      nombre: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      apellido: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      dni: new FormControl('',[Validators.required, Validators.pattern('[0-9]{8}')]),
      fechaNacimiento: new FormControl('',[Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/](19|20)\d\d$/)] ),
      genero: new FormControl('',[Validators.required, Validators.pattern('^[Masculino|Femenino|Otro]*$')]),
      direccion: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]*')]),
      provincia: new FormControl('',[Validators.required, Validators.pattern('^[Cordoba|Buenos Aires|Rosario|Tucuman]*$')])
    }
    this.formEstudents = new FormGroup(controls);
  }
  guardarStudent() {
    console.log('Guardado');
    }
}
