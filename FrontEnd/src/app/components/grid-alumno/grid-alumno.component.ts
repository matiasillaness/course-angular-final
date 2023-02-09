import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { MatTableDataSource } from '@angular/material/table';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';




@Component({
  selector: 'app-grid-alumno',
  templateUrl: './grid-alumno.component.html',
  styleUrls: ['./grid-alumno.component.css'],

})
export class GridAlumnoComponent {
 
 
 
 //cambiar en un futuro por un servicio
  listAlumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', apellido: 'Perez', dni: 12345678, genero: 'Masculino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 23123},
    { id: 2, nombre: 'Maria', apellido: 'Gomez', dni: 87654321, genero: 'Femenino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 231231},
    { id: 3, nombre: 'Pedro', apellido: 'Gonzalez', dni: 12345678, genero: 'Masculino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 1234234},
    { id: 4, nombre: 'Jose', apellido: 'Rodriguez', dni: 87654321, genero: 'Masculino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 123123},
    { id: 5, nombre: 'Luis', apellido: 'Fernandez', dni: 12345678, genero: 'Masculino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 345345},
  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.listAlumnos);
  columnas: string[] = ['id', 'nombreCompleto', 'dni', 'genero', 'provincia', 'ciudad', 'fechaNacimiento', 'carrera', 'legajo', 'acciones'];

  constructor() { 
    this.dataSource = new MatTableDataSource<Alumno>(this.listAlumnos);
  }

}
