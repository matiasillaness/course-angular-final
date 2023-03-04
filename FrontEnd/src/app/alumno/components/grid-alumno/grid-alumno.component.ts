import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { MatTableDataSource } from '@angular/material/table';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';
import { AlumnoServiceService } from 'src/app/alumno/service/alumno-service.service'
import { RecursosAlumnoService } from '../../service/recursos-alumno.service';
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-grid-alumno',
  templateUrl: './grid-alumno.component.html',
  styleUrls: ['./grid-alumno.component.css'],

})
export class GridAlumnoComponent implements OnInit, OnDestroy{
  
  suscripcion!: Subscription;
  listAlumnos !: Alumno[];
  dataSource !: MatTableDataSource<Alumno>;
  columnas: string[] = ['id', 'nombreCompleto', 'dni', 'genero', 'provincia', 'ciudad', 'fechaNacimiento', 'carrera', 'legajo', 'acciones'];

  


  
  constructor(
    private alumnoService: RecursosAlumnoService
    ){ 
  }

  ngOnInit(): void {
    console.log("Instanciando MatTAbleDataSource");
    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this.alumnoService.getAlumnos().subscribe((alumnos: Alumno[]) => {
      console.log("Agregando datos al MatTAbleDataSource");
      this.dataSource.data = alumnos;
      console.log(alumnos)
    });
    console.log("Ultima linea del ngOnInit");
   
    
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  
}
