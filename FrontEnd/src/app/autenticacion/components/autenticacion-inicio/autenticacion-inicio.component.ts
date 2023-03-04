import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-autenticacion-inicio',
  templateUrl: './autenticacion-inicio.component.html',
  styleUrls: ['./autenticacion-inicio.component.css']
})
export class AutenticacionInicioComponent implements OnInit, OnChanges{

  hidden?: boolean = false;
  ngOnInit(): void {
    
  }
 
  ngOnChanges(): void {
    this.showParent()
  }

  hideParent() {
    return this.hidden = true
  }
  
  showParent() {
    return this.hidden = false
  }

  
}
