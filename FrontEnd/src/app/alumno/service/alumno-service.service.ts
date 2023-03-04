import { Injectable } from '@angular/core';
import { Alumno } from '../../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  

  private alumnos: Alumno[] = [
    { id: "1" ,nombre: 'Juan', apellido: 'Perez', dni: 12345678, genero: 'Masculino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 23123 , direccion: 'Calle falsa 123'},
    { id: "1" ,nombre: 'Maria', apellido: 'Gomez', dni: 87654321, genero: 'Femenino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 231231 , direccion: 'Calle falsa 123'},
    {  id: "1" ,nombre: 'Pedro', apellido: 'Gonzalez', dni: 12345678, genero: 'Masculino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 1234234 , direccion: 'Calle falsa 123'},
    { id: "1" ,nombre: 'Jose', apellido: 'Rodriguez', dni: 87654321, genero: 'Masculino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 123123 , direccion: 'Calle falsa 123'},
    {  id: "1" ,nombre: 'Luis', apellido: 'Fernandez', dni: 12345678, genero: 'Masculino', provincia: 'Buenos Aires', ciudad: 'La Plata', fechaNacimiento: '01/01/2000', carrera: 'Ingenieria Mecanica', legajo: 345345, direccion: 'Calle falsa 123'},
  ];

  constructor() { }



  getAlumnos(): Array<Alumno> {
    return this.alumnos;
  }


  eliminarAlumno(dni: number): void {
    this.alumnos = this.alumnos.filter((alumno) => alumno.dni !== dni);
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

}
