import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from 'src/app/models/alumno';
import { RecursosAlumnoService } from '../../service/recursos-alumno.service';
import { GridAlumnoComponent } from '../grid-alumno/grid-alumno.component';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.css']
})
export class EditarAlumnoComponent implements OnInit{
 
  @Input() alumnoId!: Alumno
  

  constructor(private alumnoService: RecursosAlumnoService){

  }
  ngOnInit(): void {
    
  }


}
