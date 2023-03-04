import { Injectable } from '@angular/core';
import { Alumno } from '../../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoServiceService {

  

  private alumnos: Alumno[] = [
  
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
