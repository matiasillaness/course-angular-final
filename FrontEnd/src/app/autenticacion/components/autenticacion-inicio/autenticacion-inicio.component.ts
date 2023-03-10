import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacion-inicio',
  templateUrl: './autenticacion-inicio.component.html',
  styleUrls: ['./autenticacion-inicio.component.css']
})
export class AutenticacionInicioComponent implements OnInit, OnChanges{

  hidden?: boolean = false;
  ngOnInit(): void { 
    window.addEventListener("popstate", (ev: PopStateEvent): void => { 
      this.hidden = false; 
      console.log(ev); //muestra el evento popstate
    }); 
  }
 
  ngOnChanges(): void {
  
  }


  hideParent() {
    return this.hidden = true
  }
  
  showParent() {
    return this.hidden = false
  }

  
}
