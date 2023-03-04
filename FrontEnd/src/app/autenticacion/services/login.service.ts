import { Injectable } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private sesion: SesionService
  ){

   }


  login(usuario: Usuario){
    let sesion: Sesion = {
      sesionActivada: true,
      usuario: usuario,
    };

    this.sesion.crearSesion(sesion);
  }
}
