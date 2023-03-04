import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AutenticacionInicioComponent } from '../autenticacion-inicio/autenticacion-inicio.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{


  formulario !: FormGroup;


  constructor(
    private loginService: LoginService,
    private autenticacion: AutenticacionInicioComponent
  ){ }
  
  ngOnDestroy(): void {
    this.autenticacion.hidden = false
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      password: new FormControl(),
      tipoAcceso: new FormControl()
    });
    this.autenticacion.hidden = true
  }

  login(){
    let usuario: any = {
      usuario: this.formulario.value.usuario,
      password: this.formulario.value.password,
      tipoAcceso: this.formulario.value.tipoAcceso
    };
    this.loginService.login(usuario);
  }

}


