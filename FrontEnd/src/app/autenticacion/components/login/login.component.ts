import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GuardsCheckEnd, Route, Router } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin/admin.guard';
import { SesionGuard } from 'src/app/core/guards/sesion/sesion.guard';
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
    private router: Router
  ){ }
  
  ngOnDestroy(): void {
   
  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      usuario: new FormControl(),
      password: new FormControl(),
      tipoAcceso: new FormControl()
    });
    
  }

  login(){
    let usuario: any = {
      usuario: this.formulario.value.usuario,
      password: this.formulario.value.password,
      tipoAcceso: this.formulario.value.tipoAcceso
    };
    this.loginService.login(usuario);
    this.router.navigate(['inicio'])
  }

}


