import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { MatTableDataSource } from '@angular/material/table';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';
import { AlumnoServiceService } from 'src/app/alumno/service/alumno-service.service'





@Component({
  selector: 'app-grid-alumno',
  templateUrl: './grid-alumno.component.html',
  styleUrls: ['./grid-alumno.component.css'],

})
export class GridAlumnoComponent implements OnInit{

  listAlumnos !: Alumno[];
  dataSource !: MatTableDataSource<Alumno>;
  columnas: string[] = ['id', 'nombreCompleto', 'dni', 'genero', 'provincia', 'ciudad', 'fechaNacimiento', 'carrera', 'legajo', 'acciones'];

 

  
  constructor(
    private alumnoService: AlumnoServiceService
    ){ 
  }

  ngOnInit(): void {
    this.listAlumnos = this.alumnoService.getAlumnos(); 
    this.dataSource = new MatTableDataSource<Alumno>(this.listAlumnos);
    console.log(this.listAlumnos);
  }
}
