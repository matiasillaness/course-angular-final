import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { env } from 'src/enviroment/env';

@Injectable({
  providedIn: 'root',
})
export class RecursosAlumnoService {

  
  constructor( 
    private http: HttpClient
  ) {
  }

  getAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(`${env.apiURL}/alumno`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }

  postAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(`${env.apiURL}/alumno`, alumno,{
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.capturarError)
    );
  }
  editarCurso(alumno: Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(`${env.apiURL}/cursos/${alumno.id}`, alumno).pipe(
      catchError(this.capturarError)
    );
  }

  deleteAlumno(alumno: Alumno): Observable<Alumno>{
    return this.http.delete<Alumno>(`${env.apiURL}/alumno/${alumno.id}`).pipe(
      catchError(this.capturarError)
    );
  }



  private capturarError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Hubo un error del lado del cliente: ${error.message}`);
    }else{
      alert(`Hubo un error del lado del servidor: ${error.message}`);
    }

    return throwError(() => new Error('Error en el procesamiento de cursos'));
  }

}
