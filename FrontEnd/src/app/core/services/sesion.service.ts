import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Sesion } from 'src/app/models/sesion';



@Injectable({
  providedIn: 'root'
})
export class SesionService implements OnDestroy{
  sesion$ !: BehaviorSubject<Sesion>
  
  
  constructor() { 
    let sesion: Sesion = {
      sesionActivada: false,
      usuario: {
        id: "0",
        usuario: '',
        password: '',
        tipoAcceso: false
      }

     
    };
    this.sesion$ = new BehaviorSubject<Sesion>(sesion);
  }
  
  
  
  ngOnDestroy(): void {
    this.sesion$.unsubscribe();
  }


  crearSesion(sesion: Sesion){
    this.sesion$.next(sesion);
    console.log("creando sesion",sesion);
  }

  obtenerSesion(){
    return this.sesion$.asObservable();
  }
}
