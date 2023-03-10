import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { MatTableDataSource } from '@angular/material/table';
import { NombreCompletoPipe } from 'src/app/pipes/nombre-completo.pipe';
import { AlumnoServiceService } from 'src/app/alumno/service/alumno-service.service'
import { RecursosAlumnoService } from '../../service/recursos-alumno.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-grid-alumno',
  templateUrl: './grid-alumno.component.html',
  styleUrls: ['./grid-alumno.component.css'],

})
export class GridAlumnoComponent implements OnInit, OnDestroy, OnChanges{

  mostrarTabla = true;
  suscripcion!: Subscription;
  listAlumnos !: Alumno[];
  dataSource !: MatTableDataSource<Alumno>;
  columnas: string[] = ['id', 'nombreCompleto', 'dni', 'genero', 'provincia', 'ciudad', 'fechaNacimiento', 'carrera', 'legajo', 'acciones'];
  mostrarAcciones: boolean = false;
  informacionRecibida !: boolean;
  alumno !: Alumno
  
  
  constructor(private alumnoService: RecursosAlumnoService, private route: ActivatedRoute){ 
   
  }
  
 


  
 /*  alu: object = getId(alumno: Alumno) {
    return alumno;
  }; */


  GetId(alumno: Alumno){
    return this.alumno = alumno, this.mostrarAcciones = true
  };
  
  ngOnChanges(): void {
 
  
  }
 
  ngOnInit(): void {
    this.llamarApi()
  }

  llamarApi(){
    console.log("Instanciando MatTAbleDataSource");
    this.dataSource = new MatTableDataSource<Alumno>();
    this.suscripcion = this.alumnoService.getAlumnos().subscribe((alumnos: Alumno[]) => {
      console.log("Agregando datos al MatTAbleDataSource");
      this.dataSource.data = alumnos;
      console.log(alumnos)
      alumnos = this.listAlumnos
    });
    console.log("Ultima linea del ngOnInit");
     // Suscríbete a los cambios de la URL
     this.route.url.subscribe(url => {
      this.mostrarAcciones = false;
      // Verifica si la URL es la del componente padre
      if (url[0].path === 'alumno/tabla') {
        // Reinicia la variable
      }
    });
  }

  deleteAlumno(alumno: Alumno){
    this.suscripcion = this.alumnoService.deleteAlumno(alumno).subscribe()
    setTimeout(() => {
      this.llamarApi();
    }, 200);
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
}

